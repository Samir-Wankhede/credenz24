import { Environment, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Experience from './Experience'
import LoadPage from '../loading/LoadPage'
import './Experience.css'

export default function Landing() {
    const [explore3D,setExplore3D]=useState(false)
    const [exploreUnderwater,setExploreUnderwater]=useState(false)
    const [showToggle,setShowToggle]=useState(false)
    const {progress}=useProgress()

    useEffect(()=>{
        console.log(progress)
        
        if (progress>=90){
            setShowToggle(true)
        }
        console.log(showToggle)
    },[progress])

  return (
    <>

    {showToggle && 
        <div className='toggle-div'>
            <div className='switch-container'>
                <div className='container'>
                    <input type='checkbox' name='checkbox' value='checkbox' 
                    checked={explore3D} id='checkbox1'
                    onChange={(e)=>setExplore3D(e.target.checked)}/>
                    <label className="label1" htmlFor="checkbox1" ></label>

                    
                </div>
                    <p className='toggle-tag'>Explore
                    <br/> 3D</p>
            </div>
            <div className='switch-container'>
                <div className='container'>
                    <input type='checkbox' name='checkbox' value='checkbox' 
                    checked={exploreUnderwater} id='checkbox2'
                    onChange={(e)=>setExploreUnderwater(e.target.checked)}/>
                    <label className="label2" htmlFor="checkbox2" ></label>
                </div>
                    <p className='toggle-tag'>Explore UnderWater</p>
            </div>
        </div>
    }
    <Canvas className='canvas'>
       {/* loading page fallback */} 
        <Suspense fallback={<LoadPage/>}>
            <Experience explore={explore3D} />
            <Environment files={'/models/nightSky.hdr'}
             background
             preset='night'/>
            
        </Suspense> 
    </Canvas>  
  </>
  )
}