import React from 'react'
import fondo from '../assets/students/conferencias.jpg'

export const Students = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${fondo})`,
                opacity: 0.7
            }}
            className='section flex-col bg-cover'
            id='/courses'
        >

            <div>
                Carousel

            </div>

        </div>
    )
}
