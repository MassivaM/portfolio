// @flow
import React, {Component} from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import SvgLines from 'react-mt-svg-lines';  
import { ReactSVG } from 'react-svg'
import kontrolrdarrow from '../assets/images/kontrol-rd-arrow.svg'
import kontrolrd from '../assets/images/lb.svg'


export default class SVG extends Component{

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
SvgStyled = styled.div`
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
render(){
  return (
  
  
    <div>
    <Controller>
          <Scene duration={0.75*this.state.width} triggerElement='first-container' offset={0.75*this.state.width}   >
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

          }}