import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {

    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])


    return (
        <div>
            <Particles
                id="tsparticles"
            // options={optionsParticles}
            // init={particlesInit}
            />
        </div>
    )
}

export default ParticlesBackground