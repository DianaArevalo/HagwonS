import hmv from '../assets/videos/hagwon-school1.mp4'
import smallmv from '../assets/videos/hagwon-school2.mp4'
import maria from '../assets/profes/maria-profe.png'
import diana from '../assets/profes/profe-2.png'
import felicia from '../assets/profes/profe-1.png'




//footer

export const SECCION = [
    { name: 'Inicio', link: '/' },
    { name: 'Profesionales', link: '/professionals' },
    { name: 'Cursos', link: '/courses' },
    { name: 'Sobre Nosotros', link: '/about' },
    { name: 'Testimonios', link: '/testimonios' }
]

export const INFORMACION = [
    { name: 'Preguntas Frecuentes', link: '/questions/:ids' },
    { name: 'Contactanos', link: '/contact' },
    { name: 'Historia', link: '/history/:id' },
    { name: 'Terminos y condiciones', link: '/terms/:id' },


]

export const CURSOS = [
    { name: 'Matematicas', link: '/math' },
    { name: 'Estadistica', link: '/statistics' },
    { name: 'Ingles', link: '/english' },
    { name: 'Español', link: '/spanish' },
    { name: 'Sistemas', link: '/system' },
    { name: 'Programacion', link: '/programming' }


]

// home

export const heroVideo = hmv
export const smallHeroVideo = smallmv


// professionals 

export const PROFES = [
    {
        imageUrl: maria,
        name: "Maria Ceballos",
        type: "Math",
        description: "Licenciada de Matematicas pura egresado de la universidad Jose Francisco Caldas Bogota con una alta trayectoria y reconocimiento de docencia y enseñanza",
        edad: 35,
    },

    {
        imageUrl: diana,
        name: "Diana Arevalo",
        type: "Globant Teacher",
        description: "Autodidacta y fundador de Hagwon School, con su determinacion ha logrado crear y formar estuciantes, sirviendoles como couch o manager, quienes han obtenido resultados asombrosos. Profesional en programacion, con gran talento en matematicas y con status bilingue.",
        edad: 26,
    },

    {
        imageUrl: felicia,
        name: "Felicia Dominguez",
        type: "Chemistry",
        description: "Licenciada de Quimica y Bilogia pura egresado de la universidad Jose Francisco Caldas Bogota con una alta trayectoria y reconocimiento de docencia y enseñanza",
        edad: 35,
    },



]