import { useState } from "react"
import Logotipo from '../assets/logotipo.png'
import Profe from '../assets/profe-feliz.png'
//img
import Matematicas from '../assets/matematicas.jpg'
import Estadistica from '../assets/estadistica.jpg'
import Ingles from '../assets/ingles.jpg'
import Español from '../assets/español.jpg'
import Informatica from '../assets/informatica.jpg'
import Programacion from '../assets/programacion.jpg'
//link
import { Link } from 'react-router-dom'

export const ListCourses = () => {

    return (
        <>
            <div className='p-10 justify-center place-content-center bg-wallpaper2 w-100 h-100 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary'>

                <div className='lg:grid grid-cols-2'>
                    <div>
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
                        <h1 className='text-accent font-bold text-6xl'>Nuestros tutores:</h1>
                        <p className='p-4'>Cada clase es una oportunidad única, una ventana hacia el crecimiento y la comprensión profunda. Nuestros tutores no solo son expertos en sus campos, sino también maestros apasionados que despiertan la chispa del conocimiento con creatividad y dedicación.</p>
                        <p className='p-4'> Nos esforzamos por ofrecer no solo clases, sino experiencias memorables que nutren la mente y el espíritu. Cada sesión es cuidadosamente diseñada para fomentar la participación, la innovación y la calidad educativa que merecen.</p>
                        <p className='p-4'>A medida que avanzamos juntos, recordemos que el aprendizaje es un viaje continuo, y nuestros tutores están aquí para guiarlos con entusiasmo, paciencia y el firme compromiso de verlos florecer en cada paso. Su éxito es nuestra mayor recompensa.</p>
                    </div>
                    <div className='p-0' >
                        {/*video de motivacion*/}
                        <img
                            src={Profe}
                            alt=""
                            className='p-0'
                        />
                    </div>
                </div>
            </div>


            <div className="bg-wallpaper text-primary p-10 ">
                <div className="mx-auto grid max-w-7xl md:grid-cols-3 grid-rows-2 md:gap-4 lg:grid-cols-3 justify-center">
                    <div className="bg-wallpaper2 w-[420px] h-[600px] p-4 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary overflow-hidden items-stretch">
                        <img
                            src={Matematicas}
                            alt=""
                            className="justify-around object-cover object-center"
                        />
                        <div
                            className="space-y-3 p-5 text-sm font-semibold text-accent leading-tight"
                        >
                            Matematicas
                        </div>
                        <p
                            className="text-primary flex flex-col"
                        >Contenidos desde Algebra, Calculo I, II y III, trigonometria, geometria, bachilletaro y universidad</p>
                        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center">
                            <div className="items-center justify-between p-10">
                                <Link
                                    to='/math'
                                    className="justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-purple-600 ring-offset-0  "
                                >
                                    Agendar
                                </Link>

                            </div>


                        </div>


                    </div>
                    <div className="bg-wallpaper2 w-[420px] h-[600px] p-4 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary">
                        <img
                            src={Estadistica}
                            alt=""
                            className="justify-around object-cover object-center"
                        />
                        <div
                            className="space-y-3 p-5 text-sm font-semibold text-accent leading-tight"
                        >
                            Estadistica
                        </div>
                        <p
                            className="text-primary"
                        >Contenidos desde Algebra, Calculo I, II y III, trigonometria, geometria, bachilletaro y universidad</p>
                        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center">
                            <div className="items-center justify-between p-10">
                                <Link
                                    to='/statistics'
                                    className="justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-purple-600 ring-offset-0  "
                                >
                                    Agendar
                                </Link>

                            </div>
                        </div>


                    </div>
                    <div className="bg-wallpaper2 w-[420px] h-[600px] p-4 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary">
                        <img
                            src={Ingles}
                            alt=""
                            className="justify-around object-cover object-center"
                        />
                        <div
                            className="space-y-3 p-2 text-sm font-semibold text-accent leading-tight"
                        >
                            English
                        </div>
                        <p
                            className="text-primary"
                        >Contenidos desde Algebra, Calculo I, II y III, trigonometria, geometria, bachilletaro y universidad</p>
                        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center">
                            <div className="items-center justify-between p-10">
                                <Link
                                    to='/english'
                                    className="justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-purple-600 ring-offset-0"
                                >
                                    Agendar
                                </Link>

                            </div>
                        </div>


                    </div>
                    <div className="bg-wallpaper2 w-[420px] h-[600px] p-4 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary">
                        <img
                            src={Español}
                            alt=""
                            className="justify-around object-cover object-center"
                        />
                        <div
                            className="space-y-3 p-5 text-sm font-semibold text-accent leading-tight"
                        >
                            Spanish and Literacy
                        </div>
                        <p
                            className="text-primary"
                        >Contenidos desde Algebra, Calculo I, II y III, trigonometria, geometria, bachilletaro y universidad</p>
                        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center">
                            <div className="items-center justify-between p-10">
                                <Link
                                    to='/spanish'
                                    className="justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-purple-600 ring-offset-0"
                                >
                                    Agendar
                                </Link>

                            </div>
                        </div>



                    </div>
                    <div className="bg-wallpaper2 w-[420px] h-[600px] p-4 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary">
                        <img
                            src={Informatica}
                            alt=""
                            className="justify-around object-cover object-center"
                        />
                        <div
                            className="space-y-3 p-5 text-sm font-semibold text-accent leading-tight"
                        >
                            Systems
                        </div>
                        <p
                            className="text-primary"
                        >Contenidos desde Algebra, Calculo I, II y III, trigonometria, geometria, bachilletaro y universidad</p>
                        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center">
                            <div className="items-center justify-between p-10">
                                <Link
                                    to='/system'
                                    className="justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-purple-600 ring-offset-0"
                                >
                                    Agendar
                                </Link>

                            </div>
                        </div>


                    </div>
                    <div className="bg-wallpaper2 w-[420px] h-[600px] p-4 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary">
                        <img
                            src={Programacion}
                            alt=""
                            className="justify-around object-cover object-center"
                        />
                        <div
                            className="space-y-3 p-5 text-sm font-semibold text-accent leading-tight"
                        >
                            Programming Course
                        </div>
                        <p
                            className="text-primary"
                        >Contenidos desde Algebra, Calculo I, II y III, trigonometria, geometria, bachilletaro y universidad</p>
                        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center">
                            <div className="items-center justify-between p-10">
                                <Link
                                    to='/programming'
                                    className="justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-purple-600 ring-offset-0"
                                >
                                    Agendar
                                </Link>


                            </div>
                        </div>


                    </div>
                </div>
                <div>
                    Video
                </div>

            </div>
        </>
    )
}
