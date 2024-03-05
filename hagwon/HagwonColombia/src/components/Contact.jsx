import { useFormContact } from '../hooks/useFormContact'
import { Link } from 'react-router-dom'
import Logotipo from '../assets/logotipo.png'
import Contacto from '../assets/contacto.jpg'



export const Contact = () => {

    const contactForm = {
        name: '',
        email: '',
        matter: '',
        message: '',

    }

    const onValidate = (formState) => {
        let errors = {}
        let regexComments = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,250}$/
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;



        if (!formState.name.trim()) {
            errors.name = 'Este campo es necesario para enviar el formulario'
        } else if (!regexName.test(formState.name)) {
            errors.name = 'Este campo solo acepta letras y espacios'

        }
        if (!formState.email.trim()) {
            errors.email = 'Este campo es necesario para enviar el formulario'
        } else if (!emailRegex.test(formState.email)) {
            errors.email = 'El campo "Email" contiene un formato no valido'

        }
        if (!formState.matter.trim()) {
            errors.matter = 'Este campo es necesario para enviar el formulario'
        }

        if (!formState.message.trim()) {
            errors.message = 'Este campo es necesario para enviar el formulario'
        } else if (!regexComments.test(formState.message)) {
            errors.message = 'No puede sobrepasar los 250 caracteres'


        }

        return errors

    }

    const { formState, onInputChange, handleSubmit, errors, loading } = useFormContact(contactForm, onValidate)

    return (
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center '>

            <div className='md:w-2/3 lg:w-2/5'>

                <form
                    onSubmit={handleSubmit}
                    action=""
                    className='my-10  bg-wallpaper2 text-accent shadow-2xl p-10 rounded-2xl ring ring-primary ring-offset-0 shadow-primary'
                    id='form'
                >
                    <h1 className='text-body block text-5xl font-bold justify-center'>
                        Contactanos...
                    </h1>
                    <div className='my-10 '>
                        <img src={Contacto} alt="" />


                    </div>


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
                                htmlFor='name'
                                className='text-body block text-lx font-bold'
                            >
                                Nombres
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="text"
                                name='name'
                                placeholder='Angela Maria'
                                value={formState.name}
                                onChange={onInputChange}

                            />

                            {errors.name && <div className='bg-red-400 text-primary alert alert-danger p-1'
                            >
                                {errors.name}
                            </div>}
                        </div>

                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='email'
                            >
                                Email de contacto
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="email"
                                name='email'
                                placeholder='hagwonSchoolOficial@gmail.com'
                                onChange={onInputChange}
                                value={formState.email}
                            />
                            {errors.email && <div className='bg-red-400 text-primary alert alert-danger p-1'
                            >
                                {errors.email}
                            </div>}

                        </div>


                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='matter'
                            >
                                ¿Que quieres aprender?
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="text"
                                name='matter'
                                placeholder='Programacion, Ingles, Matematicas, etc'
                                onChange={onInputChange}
                                value={formState.matter}
                            />
                            {errors.matter && <div className='bg-red-400 text-primary alert alert-danger p-1'
                            >
                                {errors.matter}
                            </div>}

                        </div>

                        <div>
                            <label
                                className='text-body block text-lx font-bold'
                                htmlFor='message'
                            >
                                Cuentanos sobre ti
                            </label>
                            <input
                                className='w-full mt-3 p-3 border rounded-xl bg-body'
                                type="text"
                                name='message'
                                placeholder=''
                                onChange={onInputChange}
                                value={formState.message}
                            />
                            {errors.message && <div className='bg-red-400 text-primary alert alert-danger p-1'
                            >
                                {errors.message}
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

                        <button

                            type="submit"
                            value="Enviar"
                            className="my-5 bg-accent mb-5 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-purple-600 transition-colors"
                            disabled={loading}
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </button>



                        <Link
                            className="block text-center my-5 text-body text-sm"
                            to='/registro/:id'
                        >
                            ¿No te has registrado?
                        </Link>

                        <Link
                            className="block text-center my-5 text-body text-sm"
                            to='/login/:id'
                        >
                            ¿Ya tienes una cuenta?
                        </Link>



                    </div>

                </form>


            </div >

        </main >
    )
}
