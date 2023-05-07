import React from 'react'
import './Navbar.css'
import github from '../asset/github.png'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'





function Navbar() {

const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='navbar'>

        <ul className='navbar__links'>

        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#activities'>Activities</a></li>
     

      
       
        </ul>


        <div className='navbar__github'>
        <a href='https://github.com/radz22'>
         <img src={github} alt='github img'/>
         </a>
        </div>
       
       <div className='app__navbar-smallscreen'>

       <GiHamburgerMenu  color='#fff' fontSize={27} className='overlay__open' onClick={() => setToggleMenu (true)}/>
  
       {toggleMenu && (

          <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
          <MdClose color='#fff' fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
           
          <div className='navbar-smallscreen__github'>
   
           <a href='https://github.com/radz22'>
            <img src={github} alt='github img'/>
            </a>
           </div>
           
           <ul className='navbar-smallscreen_links'>
            
           <li className='p__opensans'><a href='#home'>Home</a></li>
           <li className='p__opensans'><a href='#about'>About</a></li>
           <li className='p__opensans'><a href='#activites'>Activities</a></li>
           <li className='p__opensans'><a href='#tool'>Tool</a></li>
           </ul>
           
           </div>
       )}
   
      
   
        
       </div>
     

    </nav>
  )
}

export default Navbar