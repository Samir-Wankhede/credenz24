import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, useCubeTexture } from '@react-three/drei';


// 'px.png',
// 'nx.png',
// 'ny.png',
// 'py.png',
// 'nz.png',
// 'pz.png'
const Skybox = () => {
    const envMap = useCubeTexture( [
        'wall.jpeg',
        'wall.jpeg',
        'bottom.jpeg',
        'top.jpeg',
        'wall.jpeg',
        'wall.jpeg'
      ],{ path: "/skybox/"});
      console.log(envMap)
    return (
      <mesh position={[0,-450.5,0]}>
        <boxGeometry args={[900, 900, 900]} />
        <OrbitControls enableZoom="false"/>
        <fog args={['blue', 1,1]}/>
        <meshBasicMaterial envMap={envMap} roughness={1} metalness={0} side={THREE.BackSide}/>
      </mesh>
    );
  };
  
  export default Skybox;