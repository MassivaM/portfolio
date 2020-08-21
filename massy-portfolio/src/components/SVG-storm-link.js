// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import SvgLines from 'react-mt-svg-lines';  
import { ReactSVG } from 'react-svg'
import kontrolrdarrow from '../assets/images/kontrol-rd-arrow.svg'
import kontrolrd from '../assets/images/arrow.svg'
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import Button from '@material-ui/core/Button';
import arduino from '../assets/images/arduino.svg'
import android from '../assets/images/android.svg'
const SvgStyled = styled.div`
  overflow: hidden;
  .section {
    height: 70vh;
  }
  #polygon {
    stroke: yellowgreen;
    stroke-width: 0;
    stroke-linejoin: round;
    fill: black;
  }
  svg {
    display: block;
    height: 280px;
    width: 320px;
    margin: auto;
    overflow: visible;
  }
`;

const List = () => (
  
  
    <div>
    <Controller>
          <Scene duration={300} triggerElement='first-container' offset={1450}>
          {(progress) => (
            <Tween
           
            from={{
          
              css: {
               
            
                opacity:0

              },
              ease:"Linear.easeNone"
            }}
            to={{
              css: {
               opacity:1,
            
              },
              ease:"Linear.easeNone"
            }}
              totalProgress={progress}
              paused
 
            >
         





               
              <div id='first-container'>
              <Button 
   variant="link"
   color="default"
  
   startIcon={<LanguageSharpIcon color="primary" fontSize="large"  />}
   href="https://www.instagram.com/p/Bz-oDUTHrob/?utm_source=ig_web_copy_link"
>
<img src={arduino} style={{width:25, height:25,margin:0, padding:0}}/>
<img src={android} style={{width:25, height:25,margin:0, padding:0}}/>
</Button>
             
                
              </div>
            </Tween>    
          )}
        </Scene>
      </Controller>
      
</div>
);

export default List;