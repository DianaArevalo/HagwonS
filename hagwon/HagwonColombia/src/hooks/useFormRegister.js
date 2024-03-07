import { useState } from "react";

export const useFormRegister = (registerForm, onValidate) => {

    const [formState, setFormState] = useState(registerForm)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})



    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const err = onValidate(formState)

        if (err === null) {
            console.log("formulario enviado...");
        } else {
            setErrors(err)
        }

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState)
            })
            const data = await res.json()
        } catch (error) {

        }
    }





    return {
        formState,
        onInputChange,
        errors,
        handleSubmit,
        loading,

    }


}