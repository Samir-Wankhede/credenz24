import { useGLTF } from '@react-three/drei'
import React from 'react'

function Bubble1() {
    const model=useGLTF('/models/bubbleeeee.glb')

  return (
    <primitive receiveShadow object={model.scene} dispose={null}
    position={[-12,-10,0]}
    scale={[1,1,1]}
    castShadow
    rotation={[0,4.7*Math.PI/4, 0]}/>
  )
}

export default Bubble1