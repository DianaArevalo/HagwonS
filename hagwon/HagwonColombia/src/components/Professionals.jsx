
import { Link } from "react-router-dom"
import { PROFES } from "../exports/data"

export const Professionals = () => {


    return (

        <section
            className='bg-wallpaper container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center flex-col'
            id='/professionals'
        >
            <div className="w-full justify-center items-center">
                <div className="mt-10 md:flex m-10 gap-3 justify-between items-center ">

                    {PROFES.map((d) => (
                        <div className="bg-wallpaper2 rounded-2xl shadow-2xl ring ring-wallpaper2 ring-offset-0 shadow-primary mb-10 lg:w-[250px]">
                            <div className="rounded-t-xl bg-gradient-to-r from-accent to-wallpaper  flex justify-center items-center">
                                <img src={d.imageUrl} alt="" className="h-44 w-44 rounded-full ring-primary ring-offset-0 shadow-primary p-2 " />
                            </div>

                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p>{d.type}</p>
                                <button className="btn">Leer mas...</button>

                            </div>

                        </div>
                    ))}




                </div>
            </div>

            <div className=' mx-auto flex flex-col md:flex-row items-center'>
                <div className='items-center justify-between p-10'>
                    <Link className='btn '
                        to='/cursos/:id'
                    >Ver mas</Link>
                </div>
                <div className='justify-between items-center'>
                    <Link className='btn '
                        to=''
                    >Trabaja con Nosotros</Link>
                </div>
            </div>


        </section>



    )
}
