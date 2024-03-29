import React from 'react'
import "./Transition.css"
import { Html } from '@react-three/drei'

const Transition = () => {
    console.log("Transitioning")
  return (
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
  )
}

export default Transition
