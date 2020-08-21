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
import rpi from '../assets/images/rpi.svg';
import python from '../assets/images/python.svg'

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
          <Scene duration={300} triggerElement='first-container' offset={1200}>
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
  
   startIcon={<LanguageSharpIcon color="primary" fontSize="very large"  />}
   href="https://news.sap.com/2019/09/nyfw-sap-cirque-du-soleil-hi-tech-experience/"
>

<img src={rpi} style={{width:25, height:25,margin:0, padding:0}}/>
<img src={python} style={{width:25, height:25,margin:0, padding:0}}/>
</Button>
           
                
              </div>
            </Tween>    
          )}
        </Scene>
      </Controller>
      
</div>
);

export default List;