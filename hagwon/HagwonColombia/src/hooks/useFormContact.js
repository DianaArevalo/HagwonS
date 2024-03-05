import { useState } from "react"


export const useFormContact = (contactForm, onValidate) => {

    const [formState, setFormState] = useState(contactForm)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

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
        setErrors(err)


        if (Object.keys(err).length === 0) {
            setLoading(true)
            fetch("https://formsubmit.co/ajax/morec9834@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    data.success === "true" && setFormState(contactForm)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                });
        }
    }

    return {
        formState,
        onInputChange,
        handleSubmit,
        errors,
        loading
    }

}