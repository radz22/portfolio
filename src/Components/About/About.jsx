import React from 'react'
import { images } from '../../asset'
import Typed from 'react-typed';
import './About.css'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
function About() {
  return (
    <div className='about app__wrapper flex__center section__padding ' id='about'>
   
      <div className='about__images'  data-aos="fade-right">
        <img src={images.profile}/>

      </div>

      <div className='about__content' data-aos="fade-left">
   
   
        <div className='about__me'>

         <h1 className='about__profile headtext__cormorant' style={{color:' #080404', marginBottom:'50px'}}>About Me</h1>

         <Typed className='p__cormorant' style={{color:'#dd5014'}}
    
    strings={[
      "My Name is Radz S. Santillan " 
     
   ]}
   typeSpeed={150}
         backSpeed={80}
         loop
    />
         <p className='p__opensans ' style={{color:'#080707', margin:'19px 0px'}}>Im am 18years old studying Front-end right now but I'm planning too FullStack Web Developer Soon. I am currently studying at St Clare College of Caloocan my course to take is bscs because I love computers and I'm curious when it comes to technologies.  </p>

         <div className='app__footer-links-icons'>

       <a href='https://www.facebook.com/radzsantillann'><FiFacebook/></a>
       <a href='https://twitter.com/11g1S'><FiTwitter/></a>
       <a href='https://www.instagram.com/radzsantillan/'><FiInstagram/></a>
       </div>
    
        
        </div>

      </div>

    </div>
  )
}

export default About