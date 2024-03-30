import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import React, { useEffect } from 'react'

function Bubble1() {
    const model=useGLTF('/models/bubbleeeee.glb')
    const aboutUs=model.nodes.Icosphere001
    const contactUS=model.nodes.Icosphere002
    const events=model.nodes.Icosphere003
    const sponsors=model.nodes.Icosphere004
    const initialPositions = {
        aboutUs: aboutUs.position.clone(),
        contactUS: contactUS.position.clone(),
        events: events.position.clone(),
        sponsors: sponsors.position.clone(),
    };
    console.log(model.nodes)
    useEffect(()=>{
        
        aboutUs.position.set(-12,-0.3,4)
        aboutUs.rotation.y=Math.PI + 0.3
        contactUS.position.set(-18,-14,0)
        contactUS.rotation.y=Math.PI
        // contactUS.rotation.x=Math.PI/
        events.position.set(15,-2,-5)
        events.rotation.y=Math.PI-0.4
        sponsors.position.set(26,-17,-9)
        sponsors.rotation.y=Math.PI-0.5
        sponsors.rotation.x=Math.PI+0.3
    },[])

    useFrame(() => {
        // Floating effect for aboutUs
        animateFloating(aboutUs.position, initialPositions.aboutUs, 0.001);
        // Floating effect for contactUS
        animateFloating(contactUS.position, initialPositions.contactUS,0.002);
        // Floating effect for events
        animateFloating(events.position, initialPositions.events,0.0015);
        // Floating effect for sponsors
        animateFloating(sponsors.position, initialPositions.sponsors,0.003);
    });

    // Function to animate floating effect for an element
    const animateFloating = (position, initialPosition, speed) => {
        gsap.to(position, {
            y: initialPosition.y + Math.sin(Date.now() * speed) * 0.5,
            duration: 1,
        });
    };

  return (
    <primitive receiveShadow object={model.scene} dispose={null}
    position={[-12,-10,0]}
    scale={[0.5,0.5,0.5]}
    castShadow
    rotation={[0,4.7*Math.PI/4, 0]}/>
  )
}

export default Bubble1