import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function MainModel() {
    const model=useGLTF('/models/try-5.glb')
    console.log('here')
  return (
    <primitive object={model.scene} dispose={null}
    position={[0.7,0,0]}
    scale={[0.2,0.2,0.2]}
    rotation={[0,4.7*Math.PI/4, 0]}/>
  )
}

useGLTF.preload('/models/try-5.glb')
