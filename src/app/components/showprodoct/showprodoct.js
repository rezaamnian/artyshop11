'use client'
import React, { useEffect, useState } from 'react'
import './style.css'
export default function Showprodoct() {

 const [prodoct,setprodoct]=useState(
    ['ghashoghjpg.jpg','chob.jpg','sofal.jpg','abmivegir.jpg',
      'chob1.jpg','chob.webp','decor.jpg','dig.jpg',
      'oclock.jpg','phone1.png'
    ]
 )

 const [left,setleft]=useState(0);
 
function movetoright() {
if(left>-199){
  setleft((j)=>j-99.5)
}
if(left==-199){
  setleft((j)=>j-33.5)
}

}

function movetoleft(){
if(left<-33.5){
  setleft((j)=>j+99.5)
}
if(left==-33.5){
  setleft((j)=>j+33.5)
}

}

useEffect(()=>{
setTimeout(() => {
  movetoleft()
}, 2000);


},[])

  return (
    <div className='Arshio' >
      <div className='show' style={{left:`${left}%`}}>
        {prodoct.map((img)=>(
            <div key={img}>
                <img src={`./imgprodoct/${img}`} alt="no" className='img'/>
            </div>
        )

        )

        }
      
      <button className='button1'onClick={()=>movetoleft()} ><i className='fas fa-angle-left'></i></button>
      <button className='button2'  onClick={()=>{movetoright()}}><i className=' 	fas fa-angle-right'></i></button>
      </div> 
    </div>
  )
}
