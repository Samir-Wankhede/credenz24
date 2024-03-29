import { Environment, useProgress, useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { Suspense, useEffect, useState,useRef} from 'react'
import Experience from './Experience'
import LoadPage from '../loading/LoadPage'
import './Experience.css'
import Transition from '../Transition.jsx'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { easing } from 'maath'
import { Navigate, redirect,useNavigate} from 'react-router-dom'
import Ocean from './Ocean.jsx'
import Ocean2 from './Ocean2.jsx'
import Skybox from '../../models/WaterCube.jsx'
import { CubeTextureLoader } from 'three'

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
    },[progress])


    
  return (
    <>

    {showToggle && 
    <div className='controller'>
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
    </div>
    }
    <Canvas className='canvas' shadows={true}>
       {/* loading page fallback */} 
        <Suspense fallback={<LoadPage/>}>
            <Experience explore={explore3D} exploreUW={exploreUnderwater}/>
            <Ocean/>
            <Ocean2/> 
            <Skybox/>
           
    
            <directionalLight castShadow position={[2,20,0]} intensity={0.5}/>
            <Environment files={'/models/nightSky_willthiswork.hdr'}
             background
             />
            
        </Suspense> 
     </Canvas>  
  </>
  )
}