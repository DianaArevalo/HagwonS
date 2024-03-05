import React, { useState } from 'react'


export const BottonNavbar = ({ props }) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        //cuando esta true lo pasa a 
        setClicked(!clicked)
    }


    return (
        <>
            <button
                onClick={handleClick}
                className='-ml-1 rounded p-1 text-primary transition-colors hover:text-purple-600 focus:ring-2 focus:ring-purple-600 '
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10 text-accent">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

            </button>
        </>
    )
}
