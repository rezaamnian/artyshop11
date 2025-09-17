'use client'
import React, { useEffect, useRef, useState } from 'react'
import './Slider.css'
export default function Slider() {
  
 const [prodoct,setprodoct]=useState(
       ['ghashoghjpg.jpg','chob.jpg','sofal.jpg','abmivegir.jpg',
      'chob1.jpg','chob.webp','decor.jpg','dig.jpg',
      'oclock.jpg','phone1.png'
       ]
 )





  return (
    <div className='slider'  >
         <div className='slide' >
            <img src={`imgprodoct/${prodoct[0]}`} alt="noimg" className='img'/>
            <img src={`imgprodoct/${prodoct[1]}`} alt="noimg" className='img'/>
            <img src={`imgprodoct/${prodoct[2]}`} alt="noimg" className='img'/>
         </div>
          <div className='slide1'  >
            <img src={`imgprodoct/${prodoct[3]}`} alt="noimg" className='img'/>
            <img src={`imgprodoct/${prodoct[4]}`} alt="noimg" className='img'/>
           <img src={`imgprodoct/${prodoct[5]}`} alt="noimg" className='img'/>
         </div>
          <div className='slide2' >
            <img src={`imgprodoct/${prodoct[6]}`} alt="noimg" className='img'/>
          <img src={`imgprodoct/${prodoct[7]}`} alt="noimg" className='img'/>
           <img src={`imgprodoct/${prodoct[8]}`} alt="noimg" className='img'/>
         </div>
           
           

        </div>
     

  )
}
