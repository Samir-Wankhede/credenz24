import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./Transition.css"
import { Html } from '@react-three/drei'

const Transition = () => {
    console.log("Transitioning")
  return (
    <Canvas>
    <Html>
        <section className="sticky">
        <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            
        </div>
        </section>
    </Html>
    </Canvas>
  )
}

export default Transition
