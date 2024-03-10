import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFormLogin = (loginForm, onValidate) => {

    const [formState, setFormState] = useState(loginForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formState) {
            return setErrors('Favor llenar todos los campos')
        }

        const err = onValidate(formState)

        if (err === null) {
            console.log("enviando formulario...");
        } else {
            setErrors(err)
        }

        try {
            //loading
            setLoading(true)

            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState)
            })
            const data = await res.json()
            if (data.success === false) {
                return setErrors(data.message)
            }
            setLoading(false)

            //navigate
            if (res.ok) {
                navigate('/sign-in/:id')
            }
        } catch (error) {
            setLoading(false)
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