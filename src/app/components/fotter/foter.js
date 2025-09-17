import React from 'react'
import './foter.css'
export default function Fotter() {
  return (
    <div className='fotter'>
       
      <div className='informations'>
        <h2  className='header'>اطلاعات</h2>
        <ul className='list'>
          <li>قوانین و مقررات</li>
          <li>حریم خصوصی</li>
          <li>ارتباط با ما</li>
          <li>درباره ی ما</li>
          <li>نقشه سایت</li>
        </ul>
      </div>
       
        <div className='services'>
         <h2  className='header'>خدمات مشتریان</h2>
       <ul className='list'>
          <li>جستجو</li>
          <li>اخبار</li>
          <li>کالاهای جدید</li>
          <li>همکاری با ما</li>
        </ul>
      </div>
       
        <div className='connections'>
        <h2  className='header'>شبکه های اجتماعی</h2>
        <ul className='list'>
          <li><i class='fab fa-telegram-plane icon-1'></i>تلگرام</li>

          <li><i class=' 	fab fa-instagram  icon-1'></i>اینستاگرام</li>

          <li><i class=' 	 	fab fa-whatsapp  icon-1'></i>واتساپ</li>
           
           <li><i class=' 	 fab fa-facebook-square  icon-1'></i>فیسبوک</li>

        </ul>
      </div>

       <div className='electronic-trust'>
        <h2  className='header'>نماد الکترونیکی</h2>
        <br />
        <br />
        <br />
        <br />
        
         <div>
          <img src="./icons/electronic-icon.webp" alt="no img" className='img-electronic-trust' />
         <img src="./icons/electronic-icon1.webp" alt="no img" className='img-electronic-trust' />
         </div>
       
      </div>

    </div>
  )
}
