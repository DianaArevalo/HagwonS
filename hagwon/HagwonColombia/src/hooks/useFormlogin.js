import { useState } from "react";

export const useFormLogin = (loginForm, onValidate) => {

    const [formState, setFormState] = useState(loginForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)


    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const err = onValidate(formState)

        if (err === null) {
            console.log("enviando formulario...");
        } else {
            setErrors(err)
        }

    }

    return {
        formState,
        onInputChange,
        loading,
        handleSubmit,
        errors
    }
}