import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { FormData } from './interfaces/FormData';
import './Home.scss';

function Home() {
    const {register, handleSubmit, errors} = useForm<FormData>();
    return (
        <div>
            <form onSubmit={handleSubmit((formData) => {
                console.log(formData, "formData")
            })}> {/*onSubmit é um event listener */}
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" ref={register({required: "required"})} /> 
                {/* ref=register() funciona para vincular a function com esse input */}
                {/* quando colocamos "required" no required, é a mensagem que aparecerá. poderia constar só true */}
                    {errors.name ? <div>{errors.name.message}</div> : null}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" ref={register({required: "required"})} />
                    {errors.email ? <div>{errors.email.message}</div> : null}
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={register({required: "required"})} />
                    {errors.password ? <div>{errors.password.message}</div> : null}
                </div>
                
                <div>
                    <input type="checkbox" name="terms" id="terms" ref={register({required: "you must agree to our terms"})} />
                    <label htmlFor="terms">Accept the terms</label>
                    {errors.terms ? <div>{errors.terms.message}</div> : null}
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Home;