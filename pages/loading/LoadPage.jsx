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
    <>
        <div className='bg'>
          <div className='circle'>
              <div className='wave'></div>
          </div>
          <div className='percent'>
            <p>{percent} % </p>
          </div>
        </div>
        <div id="background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
      </div>
      </>
    </Html> 
  )
}