import { Environment, useProgress,useGLTF } from '@react-three/drei'
import { Canvas,useFrame} from '@react-three/fiber'
import React, { Suspense, useEffect, useState,useRef } from 'react'
import Experience from './Experience'
import LoadPage from '../loading/LoadPage'
import './Experience.css'
import Transition from '../Transition.jsx'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { easing } from 'maath'
import { Navigate, redirect,useNavigate} from 'react-router-dom'



export default function Landing() {
    const [explore3D,setExplore3D]=useState(false)
    const [exploreUnderwater,setExploreUnderwater]=useState(false)
    const [showToggle,setShowToggle]=useState(false)
    const {progress}=useProgress()
    const navigate=useNavigate()
    const sub=useRef()
    console.log(sub.current)
    const { nodes, materials } = useGLTF('/models/credenz_baked.glb')
    console.log("NODES:",nodes)
    console.log("SUB:",nodes.Sub)

    const redirectToNewPage = () => {
        navigate('/underwater');
      };

    useGSAP(()=>{
        console.log("SUBMARINE")
        console.log("current:",sub.current)
        if(exploreUnderwater){
        gsap.to(nodes.Sub.position,{
            y:-9,
            duration:7,
            ease:"none",
            onComplete: redirectToNewPage
        })
        redirect('/underwater')
    }
    },[exploreUnderwater])

    useEffect(()=>{
        console.log(progress)
        
        if (progress>=90){
            setShowToggle(true)
        }
        console.log(showToggle)
    },[progress])

  return (
    <>

    {showToggle && 
        <div className='toggle-div'>
            <div className='switch-container'>
                <div className='container'>
                    <input type='checkbox' name='checkbox' value='checkbox' 
                    checked={explore3D} id='checkbox1'
                    onChange={(e)=>setExplore3D(e.target.checked)}/>
                    <label className="label1" htmlFor="checkbox1" ></label>

                    
                </div>
                    <p className='toggle-tag'>Explore
                    <br/> 3D</p>
            </div>
            <div className='switch-container'>
                <div className='container'>
                    <input type='checkbox' name='checkbox' value='checkbox' 
                    checked={exploreUnderwater} id='checkbox2'
                    onChange={(e)=>setExploreUnderwater(e.target.checked)}/>
                    <label className="label2" htmlFor="checkbox2" ></label>
                </div>
                    <p className='toggle-tag'>Explore UnderWater</p>
            </div>
        </div>
    }
    <Canvas className='canvas'>
       {/* loading page fallback */} 
        <Suspense fallback={<LoadPage/>}>
            <Experience explore={explore3D} exploreUW={exploreUnderwater}/>
            <Environment files={'/models/nightSky.hdr'}
             background
             preset='night'/>
            
        </Suspense>
        {/* {exploreUnderwater && <UnderWater/>} */}
        {/* {exploreUnderwater && <Transition/>} */}
        {/* {exploreUnderwater && <Navigate to='/underwater'/>} */}
    </Canvas> 
  </>
  )
}

// import { Environment, useGLTF, useProgress } from '@react-three/drei'
// import { Canvas, useFrame } from '@react-three/fiber'
// import React, { Suspense, useEffect, useState,useRef } from 'react'
// import Experience from './Experience'
// import LoadPage from '../loading/LoadPage'
// import './Experience.css'
// import gsap from "gsap"
// import { useGSAP } from '@gsap/react'
// import { easing } from 'maath'
// import Transition from './Transition.jsx'


// export default function Landing() {
//     const sub=useRef()
//     console.log(sub.current)
//     const [explore,setExplore]=useState(false)
//     const [showToggle,setShowToggle]=useState(false)
//     const {progress}=useProgress()
//     const { nodes, materials } = useGLTF('/models/credenz_baked.glb')
//     console.log("NODES:",nodes)
//     console.log("SUB:",nodes.Sub)
//     function UnderWater(){
//         useFrame((state, delta) => {
//           state.camera.lookAt(-10,0,1)
//           easing.damp3(state.camera.position, [-2,0.5,1] ,0.5, delta)
//           return  null
//     })}

//     useGSAP(()=>{
//         console.log("SUBMARINE")
//         console.log("current:",sub.current)
//         if(explore){
//         gsap.to(nodes.Sub.position,{
//             y:-100,
//             duration:50,
//             ease:"none"
//         })
//     }
//     },[explore])

//     useEffect(()=>{
//         console.log(progress)
//         if (progress>=47){
//             setShowToggle(true)
//         }
//         console.log(showToggle)
//     },[progress,showToggle])

//   return (
//     <>
//     {showToggle && 
//         <div className='toggle-div'>
//             <div className='container'>
//                 <input type='checkbox' name='checkbox' value='checkbox' 
//                 checked={explore} id='checkbox'
//                 onChange={(e)=>setExplore(e.target.checked)}/>
//                 <label className="label" htmlFor="checkbox" ></label>
//             </div>
//             <div>Explore 3D</div>
//         </div>
//     }
//     <Canvas className='canvas'>
//         {/* loading page fallback */}
//         <Suspense fallback={<LoadPage/>}>
            
//             <Experience explore={explore} />
//             <Environment files={'/models/nightSky.hdr'}
//              background
//              preset='night'/>
            
//         </Suspense>
//         {explore && <UnderWater/>}
//         {explore && <Transition/>}
//     </Canvas>
//   </>
//   )
// }