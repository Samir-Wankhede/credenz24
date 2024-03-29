import { Html, useProgress } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import './LoadPage.css'
export default function LoadPage() {
  const {progress}=useProgress()
  const [percent,setPercent]=useState(0)
  useEffect(()=>{
    setPercent(progress < 99 ? Math.max(percent,Math.round(progress)): 99);
  },[percent,progress])
  return (
    <Html>
      <div className='container'>
      <div className="submarine">
      <div className ="top">
        <div className="pipe">
          <div className="light"></div>
        </div>
      </div>
      <div className="window window-1">
        <div className="shine"></div>
      </div>
      <div className="window window-2">
        <div className="shine"></div>
      </div>
      <div className="shadow"></div>
      <div className="propeller">
        <div className="back"></div>
        <div className="wing"></div>
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
      </div>
    </div>
    <div className="wave">
      <div className="wave1"></div>
      <div className="wave2"></div>
    </div>
    <div className='progress'>
        <p>Loading... {progress} %</p>
    </div>
    </div>
   </Html> 
  )
}
