import { Environment, useProgress, useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState,useRef} from 'react'
import Experience from './Experience'
import LoadPage from '../loading/LoadPage'
import './Experience.css'
import Transition from '../Transition.jsx'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { easing } from 'maath'
import { Navigate, redirect,useNavigate} from 'react-router-dom'
// import {WaterSurface } from './WaterSurface.jsx'
import Ocean from './Ocean.jsx'

export default function Landing() {
    const [explore3D,setExplore3D]=useState(false)
    const [exploreUnderwater,setExploreUnderwater]=useState(false)
    const [showToggle,setShowToggle]=useState(false)
    const {progress}=useProgress()

    const navigate=useNavigate()
    const sub=useRef()
    console.log(sub.current)
    const { nodes, materials } = useGLTF('/models/try-5.glb')
    console.log("NODES:",nodes)
    console.log("SUB:",nodes.Sub)

    useGSAP(()=>{
        console.log("SUBMARINE")
        if(exploreUnderwater){
            console.log('going down',nodes.Sub.position)
        gsap.to(nodes.Sub.position,{
            y:-100,
            x:0,
            z:0,
            duration:3,
            ease:"none",
            // onComplete: redirectToNewPage
        })
        gsap.to(nodes.Sub.rotation,{
            z:2*Math.PI-Math.PI/2-Math.PI/3,
            y:0.2,
            duration:3,
            ease:"none",
        })
        // redirect('/underwater')
    }
    },[exploreUnderwater])

    useEffect(()=>{
        // nodes.Sub.geometry.scale(
        //     6.008224010467529,
        //     6.008224010467529, 
        //     19.353654861450195)
        // nodes.Sub.geometry.rotateX(Math.PI/2)
        // console.log("effect")
        if (progress>=90){
            setShowToggle(true)
        }
        console.log(showToggle)
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
    <Canvas className='canvas'>
       {/* loading page fallback */} 
        <Suspense fallback={<LoadPage/>}>
            <Experience explore={explore3D} exploreUW={exploreUnderwater}/>
            {/* <WaterSurface/> */}
            <Ocean/>
            <Environment files={'/models/nightSky_willthiswork.hdr'}
             background
             />
        </Suspense> 
     </Canvas>  
  </>
  )
}