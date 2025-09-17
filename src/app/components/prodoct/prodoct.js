
'use client'

import React, { useEffect, useState } from 'react'
import './style.css'
import Link from 'next/link';
export default function Prodoct() {

  const [prodoct,setprodoct]=useState( 
        [
           {name:'baghche.jpg',title:'پایه گلدان چوبی چند طبقه' ,id:1,price:'670,000'},
            {name:'cheragh10.jpg',title:'چراغ مطالعه',id:145692,price:'420,000'},
            {name:'goldan.jpg',title:'گلدان چینی',id:3,price:'280,000'},
            {name:'koze.jpg',title:'آجیل خوری چینی',id:4,price:'540,000'},
            {name: 'mojasame.jpg',title:'مجسمه فلزی مرغابی',id:5,price:'380,000'},
            {name:'ayne.webp',title:'آینه دیواری طرح دار',id:6,price:'330,000'},
            {name:'ghablame2.jpg',title:'سرویس سه تیکه قابلمه',id:7,price:'590,000'},
            {name:'ghablame3.jpg',title:'سرویس شش تیکه قابلمه استیل',id:8,price:'1,450,000'},
            {name:'tablo.jpg',title:'تابلو فرش ',id:9,price:'2,300,000'},
            {name:'mag1.webp',title:'ماگ سرامیگی در دار',id:10,price:'200,000'},
            {name:'piknik.jpg',title:'کپسول پیک نیک مناسب طبیغت گردی',id:11,price:'250,000'},
            {name:'flask.webp',title:'فلاسک چای خوری پلاستیکی',id:1892,price:'300,000'},

             {name:'zodpaz.jpg',title:'زود پز برقی  با قابلیت تنظیم زمان' ,id:13,price:'870,000'},
            {name:'taghche.jpg',title:'تاقچه چوبی چند طبقه',id:14,price:'170,000'},

             {name:'shokolatkory.jpg',title:'شکلات خوری چینی' ,id:15,price:'370,000'},
            {name:'saat10.jpg',title:'ساعت دیواری',id:1002,price:'520,000'},
            {name:'golann.jpg',title:'گلدان سفالی سنتی',id:35,price:'280,000'},
            {name:'piale.jpg',title:'استکان نلبکی شیشه ای',id:554,price:'440,000'},
            {name: 'hamzan.jpg',title:'همزن برقی',id:5685,price:'880,000'},
            {name:'samavar.jpg',title:'سماور مسی  گازسوز',id:6879,price:'430,000'},
            {name:'saltanaty.jpg',title:'شراب خوری سلطنتی',id:117,price:'1290,000'},
            {name:'shamdan.jpg',title:'شمعدان با پایه ی چینی',id:887,price:'450,000'},
            {name:'divarkob.jpg',title:'دیوارکوب طرح گل',id:9,price:'300,000'},
            {name:'fenjan2.webp',title:'چای خوری سلطنتی طرح لیلی و مجنون',id:100,price:'2,800,000'},
            {name:'mag.jpg',title:'ماگ سرامیکی',id:1100,price:'150,000'},
            {name:'ghashogh1.webp',title:'سرویس 24 تیکه کارت قاشق و چنگال',id:15472,price:'1,300,000'},

             {name:'chiny10.jpg',title:'شکلات خوری چینی زرنگار' ,id:189,price:'670,000'},
            {name:'ghory.jpg',title:'قوری طرح مینیمال ',id:4442,price:'220,000'},
           
           
          
        ]

)
const [pagenumber,setpagenumber]=useState(1);
const [stopNumber,setstopNumber]=useState(12);
const [startNumber,setstartNumber]=useState(0);
const[showItems,setshowItems]=useState(prodoct.slice(startNumber,stopNumber));

function movetoright(){
  if(stopNumber<prodoct.length){
         setstartNumber((j)=>j+12);
         setstopNumber((j)=>j+12);
         setpagenumber((j)=>j+1)
  }


}


function movetoleft(){
  if(startNumber>0){
         setstartNumber((j)=>j-12);
         setstopNumber((j)=>j-12);
         setpagenumber((j)=>j-1)
  }


}


useEffect(()=>{
   setshowItems(prodoct.slice(startNumber,stopNumber))
  
},[startNumber])






  return (
    <div className='divprodoct'>
      <div className='hederprodoct' id='heder'>
       <h1 className='filterheder'>فیلتر ها</h1>
       <h1 className='prodoctheder'>نمایش محصولات</h1>
      </div>
    
    <div className='prodoctandfilter'>

   
    <div className='prodoct1'>
      <div className='prodoct'>
        
         {showItems.map((item)=>(
        <div key={item.id} className='prodoct-item'>
          
        <img src={`./prodoct/${item.name}`} alt="img nut fund" className='imgprodoct'/>
            <span className='titleprodoct'>{item.title}</span>
            
         <span className='priceprodoct'><span className='price'>قیمت:</span>{item.price  + ' تومان'} </span>
         <button className='buttonprodoct'>خرید</button>
          
         
        </div>
      )

      )
      
      }

      <button className='button1'onClick={()=>{movetoleft()}} ><i className='fas fa-angle-left'></i></button>
      <button className='button2'  onClick={()=>{movetoright()}}><i className=' 	fas fa-angle-right'></i></button>

    </div>

     

      <div className='foterprodoct'>
        <div className='ft'> 

      <a  href='#heder'><button className='button5'onClick={()=>movetoleft()}  ><i className='fas fa-angle-left'></i></button></a>  
        <span className='span-nextpage'>صفحه {pagenumber}/3</span>
       <a  href='#heder' ><button className='button6'  onClick={()=>{movetoright()}}><i className=' 	fas fa-angle-right'></i></button></a> 
    </div> 
        </div>
       


    </div>
    
    
    <div className='filterprodoct'>
       <div className='filterprodoctmobile'>
           <label className='filterprodoctmobile1'>فیلترها</label>
       <select className='selectprodoct'>
        <option value="p1">کلیه ی محصولات</option>
        <option value="p1">جدیدترین ها</option>
        <option value="p1">محبوب ترین ها</option>
        <option value="p1">گران ترین ها</option>
         <option value="p1">ارزان ترین ها</option>
         <option value="p1">تخفیف های این هفته</option>
         <option value="p1">پرفروش ترین ها</option>
        
 
       </select>
       </div>
      


      <ul className='filterlist'>
         <li className='itemlist'>کلیه ی محصولات</li>
         <li className='itemlist'> جدیدترین ها</li>
         <li className='itemlist'>محبوب ترین ها </li>
         <li className='itemlist'> گران ترین ها </li>
         <li className='itemlist'> ارزان ترین ها</li>
         <li className='itemlist'> تخفیف های این هفته</li>
         <li className='itemlist'> پرفروش ترن ها</li>
      </ul>
        <br />
      
      
    </div>

    </div>
     </div>
  )
}



    