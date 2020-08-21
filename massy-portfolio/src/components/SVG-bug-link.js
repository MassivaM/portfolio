// @flow
import React,{Component} from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import SvgLines from 'react-mt-svg-lines';  
import { ReactSVG } from 'react-svg'
import kontrolrdarrow from '../assets/images/kontrol-rd-arrow.svg'
import kontrolrd from '../assets/images/arrow.svg'
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import Button from '@material-ui/core/Button';
import ruby from '../assets/images/ruby.svg';
import java from '../assets/images/java.svg';

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
          <Scene duration={0.2*this.state.width} triggerElement='first-container' offset={0.7*this.state.width}   >
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
    

<img src={ruby} style={{width:20, height:20,margin:0, padding:0}}/>
<img src={java} style={{width:28, height:28,margin:0, padding:0}}/>

        
                
              </div>
            </Tween>    
          )}
        </Scene>
      </Controller>
      
</div>
);

          }}