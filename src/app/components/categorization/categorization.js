"use client"

import React, { useState } from 'react'
import './style.css'
export default function Categorization() {

 

   const [prodoct,setprodoct]=useState( 
        [
           {name:'ghablame1.png',title:'وسایل آشپزخانه',id:1},
            {name:'chob4.jpg',title:'ضروف چوبی',id:2},
            {name:'saat.jpg',title:'ساعت',id:3},
            {name:'barghy2.jpg',title:'وسایل برقی',id:4},
            {name: 'mojasame.jpg',title:'تندیس و مجسمه',id:5},
            {name:'loster1.jpg',title:'وسایل روشنایی',id:6},
            {name:'abzarchoby.jpg',title:'ابزار چوبی',id:7},
            {name:'piknik.jpg',title:'وسایل مسافرتی',id:8},
            {name:'parch.webp',title:'ضروف شیشه ای',id:9},
            {name:'goldan1.jpg',title:'سفال و گلدان',id:10}
          
        ]

)







  return (
    <div className='div'>
      <h1 className='heder'>دسته بندی محصولات</h1>
       
       <div className='categorizitions'>
       
       {prodoct.map((part)=>(
        <div className='grop' key={part.id}>
          <img src={`./imggrop/${part.name}`} alt="noimg"  className='imggrop'/><br />
           <span className='labelgrop'>{part.title}</span>
        </div>
       ))

       }

       


    </div>
    </div>
   
  )
}
