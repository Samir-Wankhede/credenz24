import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import "./Transition.css"
import { Html } from '@react-three/drei'

const Transition = () => {
    console.log("Transitioning")
    const navigate=useNavigate()
    useEffect(() => {
      const redirectTimeout = setTimeout(() => {
        // Redirect to a new page after 4 seconds
        navigate('/below');
      }, 9000); // 4 seconds in milliseconds
  
      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(redirectTimeout);
    }, [navigate]);
  return (
    <Canvas className='canvas'>
    <Html>
        <div >
          <h1>Getting there!</h1>
        </div>
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