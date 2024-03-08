import React from 'react'

const Itemfooter = ({ Links, title }) => {
    return <ul>
        <h1 className='mb-1 font-semibold text-white'>{title}</h1>
        {
            Links.map((link) => (
                <li key={link.name}>
                    <a className='text-white hover:text-purple-700 duration-300 text-sm cursor-pointer leading-6'
                        href={link.link}>{link.name}</a>
                </li>
            ))
        }
    </ul>
}

export default Itemfooter