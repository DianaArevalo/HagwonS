import { Link } from "react-router-dom"

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box justify-center items-center place-content-center bg-wallpaper2 w-100 h-100 p-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <div className="flex justify-center items-center p-4">
            <Link to={link} className=' bg-accent rounded-2xl p-3 text-white ring ring-white ring-offset-0'>
                {btnText}
            </Link>

        </div>

    </div>
)

const renderContent = {
    1: (
        <h1 className="justify-center place-content-center items-center bg-wallpaper2 w-100 h-100 p-4 rounded-2xl mt-[60px] shadow-2xl ring ring-primary ring-offset-0 shadow-primary"
        >
            Bienvenido a
            <br />
            <span
                className='font-semibold'
            >
                Hagwon School
            </span>👋


        </h1>
    ),

    2: (<InfoBox
        text="'Hagwon' significa escuela privada en Corea del Sur donde los alumnos toman clases 
        extra para mejorar sus promedios e ir a la educacion superior"
        link='/history/:id'
        btnText='Conoce mas...'
    />),

    3: (<InfoBox
        text="Sabemos que en Colombia y latinoamerica la educacion puede ser
        muy precaria y escasa para algunos, por ello llevamos este proyecto mas alla, y 
        te invitamos a que hagas parte"
        link='/cursos/:id'
        btnText='Descubrelo Ahora!'
    />)

}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo