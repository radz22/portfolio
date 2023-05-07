import React from 'react'
import './Header.css'
import Background from '../../Background/Background'
import { images } from '../../asset'
import Typed from 'react-typed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




function Header() {

 useEffect (() =>{
  AOS.init();
 }, [])
  return (
    <> 
   <Background />
    <div className='header app__wrapper section__padding flex__center '   id='home'>
   

      <div className='header__content app__wrapper_info' data-aos="fade-right">
     

      <div className='animated-typing'>

     <Typed className='header__name headtext__cormorant'
    
     strings={[
       "My Portfolio In Culminating Animation" 
      
    ]}
    typeSpeed={150}
          backSpeed={80}
          loop
     />
</div>
     
     
      <p className='p__cormorant' style={{marginTop:'10px'}}>Name: <span>Radz S. Santillan</span ></p>
      <p className='p__cormorant' style={{marginTop:'10px'}}>Teacher: <span>Mr. Arjay Morete</span> </p>

     
    </div>
     
     
    <div className='app__wrapper_img' data-aos="fade-left">
      <img src={images.computer} alt='header img'/>
    </div>
</div>
</>
  )
}

export default Header