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
import { Register } from "./pages/Register"
import { ListCourses } from "./pages/ListCourses"
import { Terms } from "./pages/terms"


//components
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Professionals } from "./components/Professionals"
import { Courses } from "./components/Courses"
import { About } from "./components/About"
import { Students } from "./components/Students"
import { Contact } from "./components/Contact"
import { History } from "./components/History"

//cursos

import { Math } from "./components/Math"
import { Statistics } from "./components/Statistics"
import { English } from "./components/English"
import { Spanish } from "./components/Spanish"
import { Systems } from "./components/Systems"
import { Programming } from "./components/Programming"



function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/cursos/:id" element={<ListCourses />} />
                <Route path="/login/:id" element={<Login />} />
                <Route path="/registro/:id" element={<Register />} />
                <Route path="/loginProf/:id" element={<formTalent />} />
                <Route path="/terms/:id" element={<Terms />} />
                <Route path="/history/:id" element={<Terms />} />


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
