import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap';

const canvas = document.getElementsByTagName("canvas")[0];
const enablefollow = false;

//-------------------------------scene
var scene = new THREE.Scene();

//-------------------------------aspect
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight, 
}; 


//-------------------------------camera
var camera = new THREE.PerspectiveCamera(75, aspect.width/aspect.height);
camera.position.set(0, 0, 15);

//-------------------------------orbital
const OrbitControl=new OrbitControls(camera,canvas);
OrbitControl.enableDamping = true;
OrbitControl.enableZoom = false;
OrbitControl.maxDistance=42;
OrbitControl.minDistance=5;


//------------------------------renderer
var renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true
});
renderer.physicallyCorrectLights = true;
renderer.Alp
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.setClearColor("#808080",0.5)
renderer.setSize(aspect.width, aspect.height);

//---------------------------light
var light = new THREE.DirectionalLight(0xffffff, 2.5);
light.position.setScalar(10);
light.position.z=-5;
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 5.5));

const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2.8);
directionalLight.position.z = 2;
scene.add(ambientLight, directionalLight);

//-----------------------loader
let base = new THREE.Object3D();
scene.add(base);

const loader = new GLTFLoader();
loader.load( 'models/workna2.glb', function ( glb ) {
  glb.scene.scale.setScalar(0.5);
  base.add( glb.scene );
  //console.log(base);
} );

base.position.z=0;
base.position.x=10;
//-----------------------------mouse tracing
var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var pointOfIntersection = new THREE.Vector3();

if (enablefollow){
  canvas.addEventListener("mousemove", onMouseMove, false);
}


function onMouseMove(event){
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, pointOfIntersection);
  base.lookAt(pointOfIntersection);
  gsap.to(base.position,{duration:1.5,delay:0.01,x:pointOfIntersection.x,y:pointOfIntersection.y,z:2});
}

//---------------------------clock class
const clock = new THREE.Clock();


//---------------------------mainloop
const animate = () => {
  //orbit
  OrbitControl.update();

  //elapsedtime
  const elaspsedtime = clock.getElapsedTime();
  
  //fishmotion
  const zpos = 10*Math.sin(elaspsedtime*2*Math.PI*0.2);
  const ypos = 2*Math.sin(elaspsedtime*2*Math.PI*0.5);
  const xpos = 10*Math.cos(elaspsedtime*2*Math.PI*0.2);

  base.lookAt(new THREE.Vector3(xpos,ypos,zpos));
  base.position.z = zpos;
  base.position.y = ypos;
  base.position.x = xpos;

  //Renderer
  renderer.render(scene, camera); //draw what the camera inside the scene captured

  //RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();

//--------------------------resize
window.addEventListener('resize',()=>{
  aspect.width=window.innerWidth;
  aspect.height=window.innerHeight;

  //to inform the camers
  camera.aspect=aspect.width/aspect.height;
  camera.updateProjectionMatrix()


  //new renderer
  renderer.setSize(0.6*aspect.width,aspect.height);
  //for more resolution
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
})
