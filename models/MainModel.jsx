import { useGSAP } from '@gsap/react'
import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import gsap from "gsap"
import { redirect, useNavigate } from 'react-router-dom'
import { useThree } from '@react-three/fiber'


export default function MainModel({exploreUnderwater}) {
    const navigate=useNavigate()
    const model=useGLTF('/models/try-5.glb')
    console.log(model)
    const sub=model.nodes.Sub
    const {camera}=useThree()
    const redirectToNewPage = () => {
      navigate('/underwater');
    };

    useGSAP(()=>{

      if(exploreUnderwater){
          console.log('going down')
          gsap.to([sub.position,camera.position],{
              y:-40,
              duration:4,
              ease:"none",
          })
      
          
          
      // redirect('/underwater')
  }
  },[exploreUnderwater])

  return (
    <primitive receiveShadow object={model.scene} dispose={null}
    position={[0.7,0,0]}
    scale={[0.2,0.2,0.2]}
    rotation={[0,4.7*Math.PI/4, 0]}/>
  )
}

useGLTF.preload('/models/try-5.glb')
