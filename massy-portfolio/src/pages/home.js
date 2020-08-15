import React from  'react';
import Navigation from '../components/Navigation-home'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PageRenderer from '../page-renderer'
import arrow from '../assets/images/down-arrow.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Home () {

  AOS.init({
    duration : 1500
    
  })

    return(
<div className="intro">
       
     
  <div className="one">
      <h1 className="soft" data-aos="zoom-out-down">SOFTWARE DEVELOPMENT <br></br> VIDEOGRAPHY <br></br> MOTION GRAPHICS</h1>
      <h1>
      <span className="massy2">Massy Mahamli</span>
      </h1>
      <img src={arrow} alt='logo'/>
      </div>
      
      <div className="experience" >

        <h1 className="title-exp" data-aos="zoom-in-down">experience</h1>


      </div>


      </div>
        
    )
}
