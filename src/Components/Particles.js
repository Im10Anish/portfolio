import React from 'react'
import Particles from 'react-particles-js'
import particlesoptions from '../data/particles-config.json'

const Particle = () => {
    return (
        <>
            <Particles width="100%" height="100vh" params={particlesoptions} />
        </>
    )
}

export default Particle
