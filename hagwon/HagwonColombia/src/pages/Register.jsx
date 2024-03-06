import { Link } from 'react-router-dom'
import Logotipo from '../assets/logotipo.png'
import { useFormRegister } from '../hooks/useFormRegister'


export const Register = () => {

    const registerForm = {
        //Aqui va la captura de la iinformacion en objeto cogiendo desde (name)
        userNames: '',
        lastName: '',
        userName: '',
        userAge: '',
        password: '',
        equalPassword: '',
    }

    const onValidate = (formState) => {
        let isError = false
        let errors = {};
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
        let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;


        if (!formState.userNames.trim()) {

            errors.userNames = 'El campo "Nombres" es obligatorio '
            isError = true
        } else if (!regexName.test(formState.userNames)) {
            errors.userNames = 'El campo "Nombres" solo acepta letras y espacios'
            isError = true
        }

        if (!formState.lastName.trim()) {
            errors.lastName = 'El campo "Apellidos" es obligatorio'
            isError = true
        } else if (!regexName.test(formState.lastName)) {
            errors.lastName = 'El campo "Apellidos" solo acepta letras y espacios'
            isError = true
        }

        if (!formState.userName.trim()) {
            errors.userName = "Por favor introduce un email"
            isError = true
        } else if (!emailRegex.test(formState.userName)) {
            errors.userName = 'El campo "Email" contiene un formato no valido'
            isError = true
        }

        if (!formState.userAge.trim()) {
            errors.userAge = 'El campo "Edad" es obligatorio'
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
                                htmlFor='userNames'
                                className='text-body block text-lx font-bold'
                            >
                                Nombres:
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="text"
                                name='userNames'
                                placeholder='Angela Maria'
                                value={formState.userNames}
                                onChange={onInputChange}

                            />
                            {errors.userNames && <div className='bg-red-400 text-primary alert alert-danger p-1'>
                                {errors.userNames}
                            </div>}

                        </div>



                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='lastName'
                            >
                                Apellidos:
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="text"
                                name='lastName'
                                placeholder='Perez '
                                value={formState.lastName}
                                onChange={onInputChange}

                            />

                            {errors.lastName && <div className='bg-red-400 text-primary alert alert-danger p-1'>
                                {errors.lastName}
                            </div>}

                        </div>

                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='userName'
                            >
                                e-mail:
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="email"
                                name='userName'
                                placeholder='hagwonSchoolOficial@gmail.com'
                                value={formState.userName}
                                onChange={onInputChange}

                            />
                            {errors.userName && <div className='bg-red-400 text-primary alert alert-danger p-1'>
                                {errors.userName}
                            </div>}
                        </div>
                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='userAge'
                            >
                                Edad:
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="number"
                                name='userAge'
                                placeholder='13'
                                value={formState.userAge}
                                onChange={onInputChange}

                            />
                            {errors.userAge && <div className='bg-red-400 text-primary alert alert-danger p-1'>
                                {errors.userAge}
                            </div>}
                        </div>
                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='password'
                            >
                                Contraseña
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="password"
                                name='password'
                                placeholder=''
                                value={formState.Spassword}
                                onChange={onInputChange}

                            />
                            {errors.password && <div className='bg-red-400 text-primary alert alert-danger p-1'>
                                {errors.password}
                            </div>}
                        </div>
                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='equalPassword'
                            >
                                Confirme su Contraseña
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="password"
                                name='equalPassword'
                                placeholder=''
                                value={formState.equalPassword}
                                onChange={onInputChange}


                            />
                            {errors.equalPassword && <div className='bg-red-400 text-primary alert alert-danger p-1'>
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
                                <p>Acepto terminos y condiciones</p>

                                <input
                                    type="checkbox"
                                    name='select'
                                    required

                                />
                            </div>





                        </label>

                        <input

                            type="submit"
                            value="registrarse"
                            className="my-5 bg-accent mb-5 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-purple-600 transition-colors"

                        />

                        <Link
                            className="block text-center my-5 text-body text-sm"
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
