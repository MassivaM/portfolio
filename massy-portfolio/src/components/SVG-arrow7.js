// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import SvgLines from 'react-mt-svg-lines';  
import { ReactSVG } from 'react-svg'
import kontrolrdarrow from '../assets/images/kontrol-rd-arrow.svg'
import kontrolrd from '../assets/images/arro2.svg'

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
          <Scene duration={300} triggerElement='first-container' offset={1800}>
          {(progress) => (
            <Tween
           
            from={{
          
              css: {
               
                strokeDasharray: 200,
                strokeDashoffset: 200,
                opacity:0.8

              },
              ease:"Linear.easeNone"
            }}
            to={{
              css: {
               opacity:1,
                strokeDashoffset: 0,
              },
              ease:"Linear.easeNone"
            }}
              totalProgress={progress}
              paused
 
            >
         





               
              <div id='first-container'>
              <ReactSVG src={kontrolrd} id='path'/>
                
              </div>
            </Tween>    
          )}
        </Scene>
      </Controller>
      
</div>
);

export default List;