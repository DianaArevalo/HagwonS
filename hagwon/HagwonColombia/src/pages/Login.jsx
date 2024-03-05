import { Link } from 'react-router-dom'
import Logotipo from '../assets/logotipo.png'
import { useFormLogin } from '../hooks/useFormlogin'


export const Login = () => {

    const loginForm = {
        userName: '',
        password: ''
    }

    const onValidate = (formState) => {
        let isError = false
        let errors = {}
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

        if (!formState.userName.trim()) {
            errors.userName = "el campo usuario no debe ser vacio"
            isError = true
        } else if (!emailRegex.test(formState.userName)) {
            errors.userName = 'El campo "Email" contiene un formato no valido'
            isError = true
        }

        if (!formState.password.trim()) {
            errors.password = "el campo contraseña no debe estar vacio"
            isError = true
        } else if (!regexPassword.test(formState.password)) {
            errors.password = 'la contraseña debe tener al menos: 8 caracteres, una letra mayuscula, una letra minuscula, un digito, sin espacios y caracteres especiales '
            isError = true
        }
        return isError ? errors : null
    }


    const { formState, errors, onInputChange, loading, handleSubmit } = useFormLogin(loginForm, onValidate)






    return (
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center '>
            <div className='md:w-2/3 lg:w-2/5'>
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
                                className='text-body block text-lx font-bold uppercase'
                                htmlFor='userName'
                            >
                                Usuario o email:
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="email"
                                name='userName'
                                placeholder='Ingrese un email'
                                value={formState.userName}
                                onChange={onInputChange}
                            />
                            {errors.userName && <div className='bg-red-400 text-primary alert alert-danger p-1'>
                                {errors.userName}
                            </div>}
                        </div>


                        <div>
                            <label
                                className='uppercase text-body block text-lx font-bold'
                                htmlFor='password'
                            >
                                Contraseña
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="password"
                                name='password'
                                placeholder='Ingresa tu contraseña'
                                value={formState.password}
                                onChange={onInputChange}
                            />
                            {errors.password && <div className='bg-red-400 text-primary alert alert-danger p-1'>
                                {errors.password}
                            </div>}
                        </div>

                        <input

                            type="submit"
                            value="Ingresar"
                            className="my-5 bg-accent mb-5 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-purple-600 transition-colors"

                        />

                        <Link
                            className="block text-center my-5 text-body text-sm"
                            to='/registro/:id'
                        >
                            ¿No te has registrado?
                        </Link>

                    </div>

                </form>


            </div>

        </main>

    )
}
