import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { FormData } from "./interfaces/FormData";
import "./Home.scss";

function Home() {
  const { register, handleSubmit, errors } = useForm<FormData>({
      defaultValues: {
          name: "Ana",
          email: "ana@iteris.com.br",
          password: "P@ssw0rd",
          terms: true,
      }
  });
  const [submitting, setSubmitting] = useState<boolean>(false);

  const [serverErrors, setServerErrors] = useState<Array<string>>([]);

  return (
    <div>
      <form
        onSubmit={handleSubmit( async (formData) => { /*onSubmit é um event listener */
            setSubmitting(true);
            setServerErrors([]); //setando do zero, pra não vir com nada

            // se eu deixasse só: const response = await fetch("/api/auth"); ele faria um get, então faço:
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: { //aqui eu falo que tipo de dado tô passando no post
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    terms: formData.terms,
                })
            });

            const data = await response.json(); //o retorno eu boto em "data"

            //Assim que vier a response:
            if(data.errors) {
                setServerErrors(data.errors);
            } else {
                console.log("Sucess! Redirect to home page.")
            }

            setSubmitting(false);
        })}
      >

          {serverErrors ? (
              <ul>
                  {serverErrors.map((error) => {
                      <li key={error}>{error}</li>
                  })}
              </ul>
          ) : null}
          
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={register({ /* ref=register() funciona para vincular a function (do useForm) com esse input */
              required: "required" /* quando colocamos "required" no required, é a mensagem que aparecerá. poderia ser só true */,
            })}
          />
          {errors.name ? <div>{errors.name.message}</div> : null}{" "}
          {/*setamos a msg para realmente ser renderizada caso exista o erro*/}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={register({ required: "required" })}
          />
          {errors.email ? <div>{errors.email.message}</div> : null}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={register({
              required: "required",
              minLength: {
                value: 8,
                message: "must be 8 characters",
              },
                 validate: (value) => {
                    return (
                    [/[a-z]/, 
                     /[A-Z]/, 
                     /[0-9]/, 
                     /[^a-zA-Z0-9]/
                    ].every((pattern) => pattern.test(value)) 
                        || "Must include lower, upper, number and special characters."
                    );
                },
            })}
          />
          {errors.password ? <div>{errors.password.message}</div> : null}
        </div>

        <div>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            ref={register({ required: "you must agree to our terms" })}
          />
          <label htmlFor="terms">Accept the terms</label>
          {errors.terms ? <div>{errors.terms.message}</div> : null}
        </div>

        <div>
          <button type="submit" disabled={submitting}> {/*é desabilitado quando submitting é true, pq daí o usuário não fica enviando 15x a mesma resposta */}
              Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
