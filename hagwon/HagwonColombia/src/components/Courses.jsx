import React from 'react'
import fondo from '../assets/courses/teclado.jpg'
import CardPrices from './cursos/cardPrices'


export const Courses = () => {

    return (
        <div
            style={{
                backgroundImage: `url(${fondo})`,
                opacity: 0.7
            }}
            className='section flex-col bg-center '
            id='/courses'
        >

            <div className='container-s justify-center items-center'>
                <div className='place-content-center '>
                    <div className='flex  place-content-center min-w-50 lg:min-w-full mt-10 mx-50'>
                        <h1 className='text-wallpaper2 text-2xl md:text-7xl font-thin font-primary capitalize md:mx-[250px]'>
                            Planes <span className='md:space-x-2 font-secondary text-sm md:text-2xl font-bold'>Busca tu crecimiento ya!!</span>
                        </h1>


                    </div>
                    <CardPrices />

                </div>


            </div>

        </div>
    )
}
