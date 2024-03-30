import * as THREE from 'three';
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader.js"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { useEffect, useRef } from "react";
import { Html } from '@react-three/drei';

function Bubble({layer}) {
  const refContainer = useRef(null);
  useEffect(() => {
    
    const loaderf=new FontLoader()
    const loader=new RGBELoader()
    console.log(loader)
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // renderer.setClearColor(0xFEFEFE);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0,0,7);
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.update();

    renderer.toneMapping=THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure=1.8
    
    // loader.load('/models/nightSky_willthiswork.hdr',function(texture){
    // texture.mapping=THREE.EquirectangularReflectionMapping
    // // scene.background=texture
    // // scene.environment=texture
    const sphere=new THREE.Mesh(
        new THREE.SphereGeometry(0.75,50,50),
        new THREE.MeshPhysicalMaterial({
        roughness:0,
        metalness:0,
        transmission:1,
        transparent:1,
        ior:2.33
        })
    )
    sphere.layers.set(layer)
    const sphere1=new THREE.Mesh(
        new THREE.SphereGeometry(0.75,50,50),
        new THREE.MeshPhysicalMaterial({
        roughness:0,
        metalness:0,
        transmission:1,
        transparent:1,
        ior:2.33
        })
    )
    sphere1.layers.set(layer)
    loaderf.load('/fonts/rubikmono.json',function(font){
        console.log("In bubble")
        console.log(font)
        const geometry=new TextGeometry("About",{
            font:font,
            size:0.15,
            height:0.25
        })
        const textMesh=new THREE.Mesh(geometry,[
            new THREE.MeshPhongMaterial({color:0xad4000}),
            new THREE.MeshPhongMaterial({color:0x5c2301}),
        ])
        const geometry1=new TextGeometry("Home",{
            font:font,
            size:0.15,
            height:0.25
        })
        const textMesh1=new THREE.Mesh(geometry1,[
            new THREE.MeshPhongMaterial({color:0xad4000}),
            new THREE.MeshPhongMaterial({color:0x5c2301}),
        ])
        const group = new THREE.Group();
        group.add( sphere );
        group.add( textMesh );
        scene.add( group );
        textMesh.position.x=sphere.position.x-0.45
        textMesh.position.y=sphere.position.x-0.05
        textMesh.position.z=sphere.position.z+0.5
        group.position.x=-3
        group.position.y=1
        group.position.z=1
        group.rotation.y=0.5
        const group1 = new THREE.Group();
        group1.add( sphere1 );
        group1.add( textMesh1 );
        scene.add( group1);
        textMesh1.position.x=sphere1.position.x-0.45
        textMesh1.position.y=sphere1.position.x-0.05
        textMesh1.position.z=sphere1.position.z+0.5
        group1.position.x=3
        group1.position.y=1
        group1.position.z=1
        group1.rotation.y=-0.5
        console.log(scene)
    })
    
    // refContainer.current && refContainer.current.appendChild( renderer.domElement );
    function animate() {
        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

  }, []);
  return (
    <Html ref={refContainer}></Html>
  );
}

export default Bubble