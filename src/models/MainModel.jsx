import { useGSAP } from '@gsap/react'
import { useGLTF, useTexture } from '@react-three/drei'
import React, { useState } from 'react'
import gsap from "gsap"
import { redirect, useNavigate } from 'react-router-dom'
import { useFrame, useThree } from '@react-three/fiber'


export default function MainModel({exploreUnderwater}) {
    const [move,setMove]=useState(false)
    const model=useGLTF('/models/credenz4.glb')
    const pos={
      x: -6,
      y: -8.4,
      z: 9
    }
    console.log(model)
    const sub=model.nodes.Sub
    const {camera}=useThree()
    
    function UnderWaterMove(){
      sub.rotateX(Math.PI/2)
      useFrame((state, delta) => {
           sub.lookAt((((state.mouse.x)*(state.viewport.width))/2)+pos.x,(((state.mouse.y)*(state.viewport.height))/2)+pos.y,pos.z,)
            gsap.to(sub.position,{y:(((state.mouse.y)*(state.viewport.height))/2)+pos.y,x:(((state.mouse.x)*(state.viewport.width))/2)+pos.x,duration:0.5,delay:0.01})
      })
      return null
    }

    useGSAP(()=>{

      if(exploreUnderwater){
          console.log('going down')
          gsap.to([sub.position,camera.position],{
              y:-40,
              duration:4,
              ease:"none",
              onComplete: ()=>{
                const timeoutId = setTimeout(() => {
                  setMove(true); // Start moving the underwater object after timeout
              }, 4000); 
              }
          })
      
          
          
      // redirect('/underwater')
  }
  },[exploreUnderwater])

  return (
    <>
    <primitive receiveShadow object={model.scene} dispose={null}
    position={[0.7,0,0]}
    scale={[0.2,0.2,0.2]}
    castShadow
    rotation={[0,4.7*Math.PI/4, 0]}/>
    {move && <UnderWaterMove/>}
    </>
  )
}

useGLTF.preload('/models/credenz4.glb')
