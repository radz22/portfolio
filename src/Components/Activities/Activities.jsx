import './Activities.css'
import { images } from '../../asset';
import Typed from 'react-typed';




const Activities = () => {
  
 
    return ( 
     
    <div className='activities flex__center section__padding' id='activities'  >
         <Typed className='headtext__cormorant' style={{color:'#dd5014'}}
    
    strings={[
      "My Activities" 
     
   ]}
   typeSpeed={150}
         backSpeed={80}
         loop
    />

<div className='activies__content' data-aos="fade-down-right"> 

     <div className='activites__video'>

      <div className='activites__video-yt'>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/BYV1NW6Go9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>


      <div className='activites__video-yt'>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/SBBHyq_kWhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>


      <div className='activites__video-yt'>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/aWTegHUpZOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className='activites__video-yt'>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/YWCi_ClQyGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className='activites__video-yt'>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/n3j9869uGcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className='activites__video-yt'>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/DkYicpQHuUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>


      <div className='activites__video-yt'>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/gU0Sq0Ia-iU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>




     </div> 
    </div>




    </div>



  
    );
  }
  
  export default Activities;