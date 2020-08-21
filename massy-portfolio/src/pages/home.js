import React from  'react';

import AOS from 'aos'
import 'aos/dist/aos.css';
import Timeline from '../components/timeline.js'
import Slider from '../components/Slider.js'

import Involvement from '../components/Involvement.js'
import { render } from 'react-dom'

import Video from '../components/Video.js'
const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
  wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
}

export default function Home () {

  AOS.init({
    duration : 1500,
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
    
  })

    return(<main>
<div className="intro">
       
  
  <div className="container-fluid home">
      <h1 className="soft aos-item" data-aos="zoom-out-down" data-aos-mirror="true" data-aos-easing="ease-in-sine">SOFTWARE DEVELOPMENT <br></br> VIDEOGRAPHY <br></br> MOTION GRAPHICS</h1>
  
      <span className="massy2">Massy Mahamli</span>
     
     
      </div>
      
      <div className="container-fluid home">
        <div className="experience">
        <h1 className="title-exp" data-aos="zoom-in-down">experience</h1>
        
        <Timeline className="time"/>
    
 
        </div>
   
        </div>
        <div className="container-fluid home">
        <div className="experience">
        <h1 className="title-exp" data-aos="zoom-in-down">projects</h1>
        <Slider />
        </div>
      </div>
      
      <div className="container-fluid home">
        <div className="experience">
        <h1 className="title-exp" data-aos="zoom-in-down">involvement</h1>
       
        <Involvement />
        </div>
      </div>
      <div className="container-fluid home">
        <div className="experience">
        <h1 className="title-exp" data-aos="zoom-in-down">VIDEO</h1></div>
        <Video/>
       
 

        
        </div>
      

</div>
      </main>
        
    )
}
render(<Home />, document.getElementById('root'))