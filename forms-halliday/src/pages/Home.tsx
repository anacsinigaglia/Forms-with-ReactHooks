import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

function Home() {
    const {} = useForm();
    return (
        <div>
            <form>I'm your form</form>
        </div>
    )
}

export default Home;