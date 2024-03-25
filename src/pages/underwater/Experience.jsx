//import { useThree } from '@react-three/fiber'
import React, { useState } from 'react'
//import { OrbitControls, useGLTF } from '@react-three/drei'
//import { isMobile } from 'react-device-detect'
import MainModel from '../../models/Submarine'


export default function Experience() {
    // let camerapos={x:-3,y:0,z:10}
    // const [rigSpeed, setRigSpeed]=useState(1.5)
    // const [cameraPosition, setCameraPosition]=useState(camerapos)
    // const [isPhone,setIsPhone]=useState(isMobile)
    // const {camera} = useThree()

  return (
    <>
    {/* model */}
    
    <MainModel />
    <directionalLight color={"white"} intensity={1.5} position={[0,0,20]}/>
    <ambientLight intensity={1.5}/>
    </>
  )
}