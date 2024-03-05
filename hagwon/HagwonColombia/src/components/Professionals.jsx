
import { Link } from 'react-router-dom'
import ParticlesBackground from '../components/config/ParticlesBackground'



export const Professionals = () => {
    return (

        <section
            className='bg-primary section mx-auto flex flex-wrap p-4 justify-between md:grid grid-cols-2 h-[100vh]  '
            id='/professionals'


        >
            < ParticlesBackground />

            <div className='justify-between flex flex-col items-center'>
                <div className='justify-center place-content-center bg-wallpaper2 w-100 h-100 p-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary'>
                    <h3 className='font-sans leading-normal'>Sabemos que la educacion en Colombia ha sido un reto, ya que existen grandes brechas de inequidad, por lo cual nuestra fundacion se basa en el perfeccionamiento de nuestras clases:  </h3>
                    <ol>
                        <li className='font-sans font-bold leading-normal'>Ser los mejores amigos de nuestros estudiantes es lo mas importante</li>
                        <li className='font-sans font-bold leading-normal'>Disfrutar mientras el estudiante aprende </li>
                        <li className='font-sans font-bold leading-normal'>Buscamos el desarrollo y avance de nuestros estudiantes</li>
                        <li className='font-sans font-bold leading-normal'>Crear un ambiente propicio y agradable en nuestras sesiones</li>
                    </ol>
                </div>
                <div className='w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center'>
                    <div className='items-center justify-between p-10'>
                        <Link className='justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-white ring-offset-0 '
                            to='/cursos/:id'
                        >Ver mas</Link>
                    </div>
                    <div className='justify-between items-center'>
                        <Link className='justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-white ring-offset-0 '
                            to=''
                        >Trabaja con Nosotros</Link>
                    </div>
                </div>

            </div>

        </section>



    )
}
