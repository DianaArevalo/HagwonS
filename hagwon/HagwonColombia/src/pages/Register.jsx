import { Link } from 'react-router-dom'
import Logotipo from '../assets/logotipo.png'
import { useFormRegister } from '../hooks/useFormRegister'


export const Register = () => {

    const registerForm = {
        //Aqui va la captura de la iinformacion en objeto cogiendo desde (name)
        username: '',
        lastname: '',
        email: '',
        userage: '',
        password: '',
        equalPassword: '',
    }

    const onValidate = (formState) => {
        let isError = false
        let errors = {};
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
        let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;


        if (!formState.username.trim()) {

            errors.username = 'El campo "Nombres" es obligatorio '
            isError = true
        } else if (!regexName.test(formState.username)) {
            errors.username = 'El campo "Nombres" solo acepta letras y espacios'
            isError = true
        }

        if (!formState.lastname.trim()) {
            errors.lastname = 'El campo "Apellidos" es obligatorio'
            isError = true
        } else if (!regexName.test(formState.lastname)) {
            errors.lastname = 'El campo "Apellidos" solo acepta letras y espacios'
            isError = true
        }

        if (!formState.email.trim()) {
            errors.email = "Por favor introduce un email"
            isError = true
        } else if (!emailRegex.test(formState.email)) {
            errors.email = 'El campo "Email" contiene un formato no valido'
            isError = true
        }

        if (!formState.userage.trim()) {
            errors.userage = 'El campo "Edad" es obligatorio'
            isError = true
        }

        if (!formState.password.trim()) {
            errors.password = "Introduce una contraseña"
            isError = true

        } else if (!regexPassword.test(formState.password)) {
            errors.password = 'la contraseña debe tener al menos: 8 caracteres, una letra mayuscula, una letra minuscula, un digito, sin espacios y caracteres especiales '
            isError = true
        }

        if (!formState.equalPassword.trim()) {
            errors.equalPassword = "Por favor confirma tu contraseña"
            isError = true
        } else if (!regexPassword.test(formState.equalPassword)) {
            errors.equalPassword = 'la contraseña debe tener al menos: 8 caracteres, una letra mayuscula, una letra minuscula, un digito, sin espacios y caracteres especiales '
            isError = true
        } else if (formState.password !== formState.equalPassword) {
            errors.equalPassword = 'las contraseña deben ser iguales'
            isError = true
        }


        return isError ? errors : null
    }

    const { formState, onInputChange, loading, handleSubmit, errors } = useFormRegister(registerForm, onValidate)


    return (
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center '>
            <div className='md:w-1/2 lg:w-3/5'>
                <form
                    onSubmit={handleSubmit}
                    action=""
                    className='my-10 bg-wallpaper2 text-accent shadow-2xl p-10 rounded-2xl ring ring-primary ring-offset-0 shadow-primary'
                    id='form'
                >
                    <div className='my-10'>
                        <Link
                            to='/'
                            className='my-10 inljustify-center'

                        >
                            <img
                                src={Logotipo}
                                alt=""
                                className='w-10 h-10 justify-center '
                            />
                        </Link>


                        <div>
                            <label
                                htmlFor='username'
                                className='text-body block text-lx font-bold'
                            >
                                Nombres*
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body mb-5'
                                type="text"
                                name='username'
                                placeholder='Angela Maria'
                                id='username'
                                value={formState.username}
                                onChange={onInputChange}

                            />
                            {errors.username && <div className='bg-red-400 text-primary alert alert-danger p-1 rounded-lg'>
                                {errors.username}
                            </div>}

                        </div>



                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='lastname'
                            >
                                Apellidos*
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body mb-5'
                                type="text"
                                name='lastname'
                                placeholder='Perez '
                                id='lastname'
                                value={formState.lastname}
                                onChange={onInputChange}

                            />

                            {errors.lastname && <div className='bg-red-400 text-primary alert alert-danger p-1 rounded-lg'>
                                {errors.lastname}
                            </div>}

                        </div>

                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='email'
                            >
                                email*
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body mb-5'
                                type="email"
                                name='email'
                                placeholder='hagwonSchoolOficial@gmail.com'
                                id='email'
                                value={formState.email}
                                onChange={onInputChange}

                            />
                            {errors.email && <div className='bg-red-400 text-primary alert alert-danger p-1 rounded-lg'>
                                {errors.email}
                            </div>}
                        </div>
                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='userage'
                            >
                                Edad*
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body mb-5'
                                type="number"
                                name='userage'
                                placeholder='13'
                                id='userage'
                                value={formState.userage}
                                onChange={onInputChange}

                            />
                            {errors.userage && <div className='bg-red-400 text-primary alert alert-danger p-1 rounded-lg'>
                                {errors.userage}
                            </div>}
                        </div>
                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='password'
                            >
                                Contraseña*
                                <br />
                                <span className='text-sm'>
                                    la contraseña debe tener al menos: 8 caracteres, una letra mayuscula, una letra minuscula, un digito, sin espacios y caracteres especiales
                                </span>
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body mb-5 '
                                type="password"
                                name='password'
                                placeholder=''
                                id='password'
                                value={formState.password}
                                onChange={onInputChange}

                            />
                            {errors.password && <div className='bg-red-400 text-primary alert alert-danger p-1 rounded-lg'>
                                {errors.password}
                            </div>}
                        </div>
                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='equalPassword'
                            >
                                Confirme su Contraseña*
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body mb-5'
                                type="password"
                                name='equalPassword'
                                placeholder=''
                                value={formState.equalPassword}
                                onChange={onInputChange}


                            />
                            {errors.equalPassword && <div className='bg-red-400 text-primary alert alert-danger p-1  rounded-lg'>
                                {errors.equalPassword}
                            </div>}
                        </div>

                        <label
                            htmlFor="terminos"
                        >
                            <div>
                                <Link
                                    to='/terms/:id'
                                >
                                    Leer terminos y condiciones
                                </Link>

                            </div>
                            <div>
                                <p
                                    className='text-body block text-lx font-bold' >
                                    Acepto terminos y condiciones*
                                </p>

                                <input
                                    type="checkbox"
                                    name='select'
                                    required

                                />
                            </div>


                        </label>

                        <div className='gap-x-10'>
                            {/* <input
                                type="submit"
                                value="registrarse"
                                name='enviar'
                                className="my-5 bg-accent mb-5 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-purple-600 transition-colors"
                            /> */}

                            <button
                                className='my-5 bg-accent mb-5 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-purple-600 transition-colors'
                                disabled={loading}
                                type='submit'

                            >
                                {loading ? (
                                    <>
                                        <span className='pl-3'>Enviando...</span>
                                    </>
                                ) : (
                                    'Enviar'
                                )}
                            </button>


                        </div>

                        {
                            Object.keys(errors).length > 0 && (
                                <div className='bg-red-400 text-primary alert alert-danger p-5 rounded-lg'>
                                    {Object.values(errors).map((error, index) => (
                                        <p key={index}>{error}</p>
                                    ))}
                                </div>
                            )
                        }



                        <Link
                            className="block text-center my-5 text-body text-lg font-bold rounded-lg"
                            to='/login/:id'
                        >
                            ¿Ya tienes una cuenta?
                        </Link>

                    </div>

                </form>


            </div>

        </main>
    )
}
