//import { useThree } from '@react-three/fiber'
import React, { useState } from 'react'
//import { OrbitControls, useGLTF } from '@react-three/drei'
//import { isMobile } from 'react-device-detect'
import Submarine from '../../models/Submarine'
import { OrbitControls } from '@react-three/drei'


export default function Experience({goUp}) {

  return (
    <>
    {/* model */}
    <Submarine goUp={goUp} />
    <directionalLight color={"white"} intensity={1.5} position={[0,0,20]}/>
    <ambientLight intensity={1.5}/>
    </>
  )
}