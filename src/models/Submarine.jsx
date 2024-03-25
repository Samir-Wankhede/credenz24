import React, { useRef, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from "gsap"


export default function Model(props) {
  const [isSinking, setIsSinking] = useState(true);
  const { nodes, materials } = useGLTF('/models/credenz_baked.glb')
  const [rigSpeed, setRigSpeed]=useState(2.5)
  const ref=useRef()
  const grpRef = useRef()
  useEffect(() => {
    const timeout = setTimeout(() => {
        setIsSinking(false) 
        setRigSpeed(1.5);
    }, 2500);
    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);
  
function InitialSink (){
    useFrame((state, delta) => {
        isSinking&&gsap.to(ref.current.position,{y:0,duration:rigSpeed})
        isSinking&&gsap.to(ref.current.rotation,{y:-Math.PI/2 + 0.5,duration:rigSpeed}) 
    })
  }
  function UnderWaterMove(){
    useFrame((state, delta) => {
         !isSinking&&ref.current.lookAt(((state.mouse.y)*(state.viewport.height))/2,((state.mouse.x)*(state.viewport.width))/2,0)
         !isSinking&&gsap.to(ref.current.position,{y:((state.mouse.y)*(state.viewport.height))/2,x:((state.mouse.x)*(state.viewport.width))/2,duration:rigSpeed,delay:0.01})
    })
    return null
  }
  return (
    <>
    <group {...props} dispose={null}>
        <mesh 
        geometry={nodes.Sub.geometry} 
        material={nodes.Sub.material} 
        scale={[1,3,1]} 
        position={[0,20,0]}
        rotation={[Math.PI/2,0,-Math.PI/2]}
        ref={ref}
        />
    </group>
    <InitialSink />
    <UnderWaterMove/>
    </>
  )
}
useGLTF.preload('/models/credenz_baked.glb')