import { Link } from "react-router-dom"
import { useState } from "react"
//GSAP
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

//Spline
import SplineS from "../components/spline/SplineS.jsx"

//componentes

import { About } from "../components/About"
import { Contact } from '../components/Contact'
import { Courses } from '../components/Courses'

import { Professionals } from '../components/Professionals'
import { Students } from '../components/Students'
import { heroVideo, smallHeroVideo } from "../exports/data.js"



export const Home = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.5 })
    })

    return (
        <>
            <section className='bg-primary flex flex-col items-center justify-center'>
                <div className="lg:flex flex-col-2 mt-10">
                    <div className="p-10 justify-between items-center flex-row relative">

                        <div className="flex items-center justify-center h-5/6 w-full flex-col mb-6 ">
                            <div className="md:w-[100%] w-[50%]">
                                <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}  >
                                    <source src={videoSrc} type="video/mp4" />
                                </video>
                            </div>
                            <p id="hero" className="text-center font-semibold text-3xl text-wallpaper2 opacity-0 max-md:mb-10 font-primary">Educacion Hibrida</p>
                            <div className="flex items-center justify-center  flex-col">
                                <Link className="btn " to="/login/:id">¿Ya tienes tu cuenta?</Link>

                            </div>
                        </div>


                    </div>
                    <div className="justify-end lg:place-content-center md:w-[100%] w-[50%] h-[50%]  ">
                        {/* <SplineS /> */}
                    </div>


                </div>

                <div className='justify-center flex flex-col items-center'>
                    <div className='box md:w-1/2'>
                        <h3 className='font-sans leading-normal'> <span className='font-bold'>'Hagwon'</span>  significa escuela privada en donde los estudiantes refuerzan sus conocimientos y habilidades, termino proveniente de Corea del Sur donde los alumnos toman clases
                            extra para mejorar sus promedios e ir a la educacion superior</h3>

                    </div>


                </div>


            </section >

            <section className="mb-10">
                <Professionals />
                <Courses />
                <About />
                <Students />
                <Contact />
            </section>



        </>

    )
}
