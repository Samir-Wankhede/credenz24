import { Float, Html, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { Group } from 'three';

function Bubble1() {
    const [hovered, setHovered] = useState(false);
    const aboutUs=useGLTF('/models/AboutUs.glb')
    const contactUs=useGLTF('/models/ContactUs-1.glb')
    const events=useGLTF('/models/Events-1.glb')
    const sponsors=useGLTF('/models/Sponsors-1.glb')
    // const initialPositions = {
    //     // aboutUs: aboutUs.position.clone(),
    //     contactUS: contactUS.position.clone(),
    //     events: events.position.clone(),
    //     sponsors: sponsors.position.clone(),
    // };
    // console.log(model.nodes)

    // useEffect(()=>{
        
    //     // aboutUs.position.set(-12,-0.3,4)
    //     // aboutUs.rotation.y=Math.PI + 0.3
    //     contactUS.position.set(-18,-14,0)
    //     contactUS.rotation.y=Math.PI
    //     // contactUS.rotation.x=Math.PI/
    //     events.position.set(15,-2,-5)
    //     events.rotation.y=Math.PI-0.4
    //     sponsors.position.set(26,-17,-9)
    //     sponsors.rotation.y=Math.PI-0.5
    //     sponsors.rotation.x=Math.PI+0.3

        
    // },[])

    // useFrame(({clock}) => {
    //     // Floating effect for aboutUs
    //     animateFloating(aboutUs.position, initialPositions.aboutUs, clock.elapsedTime*0.5);
    //     // Floating effect for contactUS
    //     animateFloating(contactUS.position, initialPositions.contactUS,clock.elapsedTime*0.6);
    //     // Floating effect for events
    //     animateFloating(events.position, initialPositions.events,clock.elapsedTime*0.3);
    //     // Floating effect for sponsors
    //     animateFloating(sponsors.position, initialPositions.sponsors,clock.elapsedTime*0.4);
    // });

    // // Function to animate floating effect for an element
    // const animateFloating = (position, initialPosition, elapsedTime) => {
    //     gsap.to(position, {
    //         y: initialPosition.y + Math.sin(elapsedTime) * 0.5,
    //         duration: 1,
    //     });
    // };
    
    const viewport=useThree((state)=>state.viewport)
    const scalingFactor=window.innerWidth/1300
    console.log(window.innerWidth)
    console.log(scalingFactor)
    const mobile=window.innerWidth<=1242
    console.log("Mobile:",mobile)
  return (
    // <primitive receiveShadow object={model.scene} dispose={null}
    // position={[-12,-10,0]}
    // scale={[0.5,0.5,0.5]}
    // castShadow
    // rotation={[0,4.7*Math.PI/4, 0]}/>
    <group scale={scalingFactor} position={mobile?[-5,-8,4]:null}>
    <Float
    speed={1}
    floatingRange={[-0.05,0.05]}>

        <primitive object={aboutUs.scene} dispose={null}
        // position={[-10,-10,-5]}
        position={mobile?[-11,-10,6]:[-9,-10,-5]}
        scale={[0.5,0.5,0.5]}
        // rotation={[0,Math.PI-3,0]}
        rotation={mobile?[Math.PI+2.5,Math.PI-3,Math.PI-2.85]:[0,Math.PI-3,0]}
    />/</Float>

    <Float
    speed={1}
    floatingRange={[-0.05,0.05]}>
        <primitive object={contactUs.scene} dispose={null}
        // position={[-20,-18,11]}
        position={mobile?[-12,-2,6]:[-15,-14,5]}
        scale={[0.5,0.5,0.5]}
        // rotation={[0,Math.PI/2,0]}
        rotation={mobile?[0,Math.PI-2.5,0]:[0,Math.PI-2,0]}
    />
    </Float>
    <Float
    speed={0.2}
    floatingRange={[-0.05,0.05]}>
        <primitive object={events.scene} dispose={null}
        // position={[-19,-10.5,8]}
        position={mobile?[-15.25,-4,9]:[-19,-9.5,5]}
        scale={[0.5,0.5,0.5]}
        // rotation={[0,Math.PI/2,0]}
        rotation={mobile?[0,Math.PI-2,0]:[0,Math.PI/2,0]}
        />
    </Float>

    <Float
    speed={0.5}
    floatingRange={[-0.05,0.05]}>


        <primitive object={sponsors.scene} dispose={null}
        // position={[-6,-15,0]}
        position={mobile?[-12.12,-12,11]:[-5,-11.5,0]}
        scale={[0.5,0.5,0.5]}
        // rotation={[Math.PI+2,Math.PI+3,0]}
        rotation={mobile?[Math.PI+2.5,Math.PI+4,Math.PI-2.65]:[Math.PI+2.5,Math.PI+3,0]}
    />
    </Float>
    </group>
  )
}

export default Bubble1