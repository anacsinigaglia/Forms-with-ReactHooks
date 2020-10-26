import { NextApiRequest, NextApiResponse } from "next";

interface FormData {
    name: string;
    email: string;
    password: string;
    terms: boolean;
    token: string; //recaptcha token
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const formData: FormData = req.body; //acesso ao formData submetido pelo usuário

    const errors = await validateData(formData); //chamamos o "validateData"
    if(errors.length > 0) {
        res.status(400);
        res.json({ errors });
        return;
    }

    res.status(201);
    res.json({ message: "Success! "});
};

//A function abaixo verifica se o email inserido está incluído no array de emails
    async function validateData(formData:FormData): Promise<Array<string>> {
        const errors = [];
        const emails = ["used@email.com"];

        if(emails.includes(formData.email)) {
            errors.push("Email already used");
        }

        return errors;
    }
