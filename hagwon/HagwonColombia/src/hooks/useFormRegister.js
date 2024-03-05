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

    const handleSubmit = (e) => {
        e.preventDefault();

        const err = onValidate(formState)

        if (err === null) {
            console.log("formulario enviado...");
        } else {
            setErrors(err)
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