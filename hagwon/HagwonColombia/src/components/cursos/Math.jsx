import React from 'react'
import { Link } from 'react-router-dom'
import Logotipo from '../../assets/logotipo.png'


export const Math = () => {
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
                        <h1 className='text-accent font-bold text-6xl'>¿Porque aprender matematicas?</h1>
                        <p className='p-4'>Aprender matemáticas es fundamental en la vida por varias razones, ya que estas habilidades no solo son esenciales en el entorno académico, sino que también tienen aplicaciones prácticas en numerosos aspectos de la vida diaria y profesional.</p>


                    </div>
                    <div className='p-' >
                        {/*video de motivacion*/}
                        <img
                            src=''
                            alt=""
                            className='p-0'
                        />
                    </div>
                </div>
            </div>
            <div className='p-10 justify-center place-content-center bg-accent w-100 h-100 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-white ring-offset-0 shadow-primary'>
                <p className='text-white text-semibold'>
                    "Cada tutor ha sido seleccionado con rigurosidad, destacando su pasión por la enseñanza. Tendrás la oportunidad de evaluar a tu tutor guía mes a mes, asegurando así una experiencia educativa que se ajuste a tus necesidades y expectativas."
                </p>
            </div>

            <div className='justify-between flex flex-col items-center lg:grid grid-cols-3 p-10'>
                <div className='justify-center place-content-center bg-wallpaper2 w-100 h-100 p-4 ml-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary'>
                    <h1 className='font-sans font-bold text-2xl leading-normal p-6'> Diana Arevalo </h1>
                    <div className=''>
                        <img src='' alt="" />
                    </div>
                    <h3 className='font-sans leading-normal p-6'>Te ayudo a comprender desde lo mas basico hasta lo mas complicado en este hermoso mundo de las matematicas, iremos avanzando a tu ritmo con resultados notables</h3>
                    <div className='w-full max-w-3xl mx-auto flex flex-col items-center'>

                        <div className='items-center justify-between p-4 '>
                            <Link className='justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-white ring-offset-0 '
                                to=''
                            >Agenda tu clase ya </Link>
                        </div>
                        <div className='items-center justify-between p-4'>
                            <Link className='justify-center bg-accent rounded-2xl w-[100px] h-[100px] p-4 text-white ring ring-white ring-offset-0 '
                                to=''
                            >Trabaja con Nosotros</Link>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}
