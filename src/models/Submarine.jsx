import React, { useRef, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from "gsap"


export default function Model(props) {
  const [isSinking, setIsSinking] = useState(true);
  const { nodes, materials } = useGLTF('/models/try-5.glb')
  //const model = useGLTF('/models/try7.glb')
  //const model=useGLTF('/models/onlySub.glb')
  const properGeometry = nodes.Sub.geometry
  const [rigSpeed, setRigSpeed]=useState(2.5)
  const ref=useRef()
  const grpRef = useRef()
  useEffect(() => {
    //droping animation is only when use effect fires
    console.log("hereinsub")
    properGeometry.rotateX(Math.PI/2)
    console.log(properGeometry)
    //properGeometry.rotateZ(-Math.PI/2)
    //console.log(model.scene)
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
        isSinking&&gsap.to(ref.current.rotation,{x:0.5,y:0,duration:rigSpeed}) 
    })
  }
  function UnderWaterMove(){
    useFrame((state, delta) => {
         !isSinking&&ref.current.lookAt(((state.mouse.x)*(state.viewport.width))/2,((state.mouse.y)*(state.viewport.height))/2,1)
         !isSinking&&gsap.to(ref.current.position,{y:((state.mouse.y)*(state.viewport.height))/2,x:((state.mouse.x)*(state.viewport.width))/2,duration:rigSpeed,delay:0.01})
    })
    return null
  }
  return (
    <>
    <group {...props} dispose={null}
    ref={grpRef}
    >
        <mesh 
        // rotation={[Math.PI/2,0,-Math.PI/2]}
        geometry={properGeometry} 
        material={nodes.Sub.material} 
        scale={[1,1,3]} 
        position={[0,20,0]}
        ref={ref}
        />

    </group>
    {/* <primitive ref={ref} object={model.scene} dispose={null}
    scale={[1,3,1]}
    position={[0,20,0]}
    rotation={[0,0,0]}
    /> */}
    <InitialSink />
    <UnderWaterMove/>
    </>
  )
}
useGLTF.preload('/models/try-5.glb')