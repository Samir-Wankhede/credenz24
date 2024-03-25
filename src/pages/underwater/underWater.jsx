import { Environment, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Experience from './Experience'
import LoadPage from '../loading/LoadPage'
import './Experience.css'

export default function Landing() {
    const [explore,setExplore]=useState(false)
    const [showToggle,setShowToggle]=useState(false)
    const {progress}=useProgress()

    useEffect(()=>{

    },[])

  return (
    <>
    {
        <div className='toggle-div'>
            <div className='container'>
                <input type='checkbox' name='checkbox' value='checkbox' 
                checked={explore} id='checkbox'
                onChange={(e)=>setExplore(e.target.checked)}/>
                <label className="label" htmlFor="checkbox" ></label>

                
            </div>
            <div>Return</div>
        </div>
    }
    <Canvas className='canvas' camera={{ position: [0, 0, 20] }}>
        <Experience  />
    </Canvas>
  </>
  )
}