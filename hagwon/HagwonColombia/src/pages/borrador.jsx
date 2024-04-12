

// Longitud mínima y máxima de campos. YA
// Contraseñas coincidentes. YA
// Campos obligatorios.YA
// Validación personalizada según tus necesidades específicas.
// validacion de checkbox
//useStates
import { useState } from 'react'
//logo
import Logo from '../assets/logoHagwon.png'
//link
import { Link } from 'react-router-dom'


//imagen en 3D
import { Canvas } from '@react-three/fiber'
import Edificio from '../models/Edificio'
import { Suspense } from 'react'
import Loader from '../components/config/Loader'
import HomeInfo from '../components/HomeInfo'



export const borrador = () => {

    const [currentStage, setCurrentStage] = useState(1)
    const [isRotating, setIsRotating] = useState(false)

    const adjustBuildScreenSize = () => {
        let screenScale = null;
        let screenPosition = [3, -20, -70]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [0.030, 0.030, 0.030]
        }
        return [screenScale, screenPosition, rotation]
    }

    const [edificioScale, edificioPosition, edificioRotation] = adjustBuildScreenSize()

    return (
        <>
            <div className='mx-auto max-w-7xl p-4 justify-between md:grid grid-cols-2'>
                <div className='flex flex-col grid-cols-2'>
                    <div className=' flex items-center grid-span-2'>
                        <img
                            src={Logo}
                            alt=""

                        />

                     

                    </div>

                    <div className=' flex flex-col items-center '>

                        {currentStage && <HomeInfo currentStage={currentStage} />}
                    </div>


                </div>

                <Canvas
                    className={`justify-center ${isRotating ?
                        'cussor-grabbing' : 'cursor-grab'}`}
                    camera={{ near: 0.1, far: 1000 }}
                >
                    <Suspense fallback={<Loader />}>
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <ambientLight intensity={0.5} />
                        <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' />

                        <Edificio
                            position={edificioPosition}
                            scale={edificioScale}
                            rotation={edificioRotation}
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            setCurrentStage={setCurrentStage}


                        />

                    </Suspense>

                </Canvas>

            </div>

        </>

    )
}


