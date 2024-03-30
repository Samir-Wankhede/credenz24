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
        'uw_rt.jpg',
        'uw_lf.jpg',
        
        'uw_dn.jpg',
        'uw_up.jpg',
        'uw_ft.jpg',
        'uw_bk.jpg'
      ],{ path: "/skybox/"});
      console.log(envMap)
    return (
      <mesh position={[0,-250.5,0]} >
        <boxGeometry args={[500, 500, 500]}  />
        <OrbitControls enableZoom="false"/>
        <fog far={1000} near={1} color={'blue'} />
 
        <meshBasicMaterial envMap={envMap} fog roughness={1} metalness={0} side={THREE.BackSide}/>
      </mesh>
    );
  };
  
  export default Skybox;