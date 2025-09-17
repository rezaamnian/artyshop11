import React, { useEffect, useState } from 'react'
import './style.css'
import {FaUser} from "react-icons/fa";
export default function Header() {





  return (
        <div className='headermain'>
            <div className='container'>
                <div className='accontbox'>
                     <div className='account'>
                            <div className='log-in-up'>
                                <button className='sign-up'>ثبت نام</button>
                                <button className='login'>ورود</button>

                            </div>
                      <div className='profile'>
                       <i className="far  fa-user  profile-icon "  ></i>
                       <span className='labelprofile'>پروفایل</span>
                        
                        
                      </div>
                       
                     </div>
                       

                     <div className='shoping-cart'>
                             <svg className='shoping-cart-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960  
                             960 960"  fill="#00f"><path d="M286.79-81Q257-81
                              236-102.21t-21-51Q215-183 
                             236.21-204t51-21Q317-225 338-203.79t21
                              51Q359-123 337.79-102t-51 21Zm400 0Q657-81 
                              636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225
                               738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 
                               228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 
                               21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56
                             104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 
                             79Zm140 288h288-288Z"/></svg> 

                     </div>
                </div>
                
                <div className='logobox'>
                          <img src="./img/logo6.png" alt="not"  className='logo'/>
                </div>


                <div className='searchbox'>
                        <form className='searchbar'>
                          <label htmlFor="searchbar" className='labelsearch'>جستجو</label>

                          <input type="text" id='searchbar' className='inputsearch' name='searchbar'  placeholder='محصول مورد نظر...'  />
                           
                            <i className=' 	fa fa-search search-icon' ></i>
                        </form>
                        

                     
                </div>

                <div className='meno'>
                   <h2 className='icon-meno'>&#9776;</h2>
                </div>
            </div>


        <div className='menolist'>
      <div className='home-item'>
        <i className='fas fa-home home-icon'> </i>
         <span  className='home-label'>خانه</span> 
      </div>
       
      <span  className='item'>دسته بندی ها </span>
      <span  className='item'>تخفیف ها </span>
      <span  className='item'>تماس با ما </span>
      <span  className='item'>درباره ما</span> 

      </div>
         
         <div>
          <form  className='searchbar-mobile'>
              <label htmlFor="search"> جستجو</label>
              <input type="text" id='search'  placeholder='محصول مورد نظر...'  className='inputsearch-mobile'/>
                <i className=' 	fa fa-search search-icon-mobile' ></i>
          </form>
          
         </div>

        </div>

  )

}


