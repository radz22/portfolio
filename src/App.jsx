import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Activities from './Components/Activities/Activities'
import Footer from './Components/Footer/Footer'







function App() {
  
  
  return (
    <div className='app'>
     <Navbar/>
     <Header/>
     <About/>
     <Activities/> 
     <Footer/>
   
    </div>
  )
}

export default App
