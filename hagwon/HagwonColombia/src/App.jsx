import React from "react"
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

//pages

import { Login } from "./pages/Login"
import Signin from "./pages/Signin"
import { Register } from "./pages/Register"
import { ListCourses } from "./pages/ListCourses"
import { Terms } from "./components/Info/Terms"


//components
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Professionals } from "./components/Professionals"
import { Courses } from "./components/Courses"
import { About } from "./components/About"
import { Students } from "./components/Students"
import { Contact } from "./components/Contact"
import { History } from "./components/Info/History"
import Questions from "./components/Info/Questions"

//cursoss

import { Math } from "./components/cursos/Math"
import { Statistics } from "./components/cursos/Statistics"
import { English } from "./components/cursos/English"
import { Spanish } from "./components/cursos/Spanish"
import { Systems } from "./components/cursos/Systems"
import { Programming } from "./components/cursos/Programming"



function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/cursos/:id" element={<ListCourses />} />
                <Route path="/login/:id" element={<Login />} />
                <Route path="/sign-in/:id" element={<Signin />} />
                <Route path="/registro/:id" element={<Register />} />
                <Route path="/loginProf/:id" element={<formTalent />} />
                <Route path="/terms/:id" element={<Terms />} />
                <Route path="/history/:id" element={<History />} />
                <Route path="/questions/:id" element={<Questions />} />

                {/* Rutas principales */}
                <Route path="/professionals" element={<Professionals />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonios" element={<Students />} />
                <Route path="/contact" element={<Contact />} />
                {/*Rutas Profesores*/}
                <Route path="/math" element={<Math />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/english" element={<English />} />
                <Route path="/spanish" element={<Spanish />} />
                <Route path="/system" element={<Systems />} />
                <Route path="/programming" element={<Programming />} />




            </Route>

        )
    )

    return (
        <div className="App h-screen bg-wallpaper sm:text-xl md:text-xl  ">
            <RouterProvider router={router} />
        </div>
    )

}




export default App
const Root = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>
            <section>
                <Outlet />
            </section>
            <section>
                <Footer />
            </section>

        </>
    )
}
