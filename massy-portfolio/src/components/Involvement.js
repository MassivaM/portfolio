



import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Back } from 'gsap';
import { Tween, Timeline } from 'react-gsap';
import link from '../assets/images/link.svg'
import insta from '../assets/images/insta.svg'
import facebook from '../assets/images/facebook.svg'
import youtube from '../assets/images/youtube.svg'
const ListStyled = styled.div`
  overflow: hidden;
  .section {
    height: 70vh;
  }
  .devs, .devs2 {
    perspective: 4000px;
    left: 100px;
    
    position: relative;
    margin:0;
   
    & li {
      font-size: 20px;
      font-family: 'Riccione-DemiBold';
      padding: 10px;
      text-decoration : none;
      color: rgb(142,144,139);
    }
  }
`;

const List = () => (
  <ListStyled>

    <Controller>
      <Scene
        duration={300}
        offset={0}
     
      >
        <Tween
          wrapper={<ul className="devs" />}
          from={{
            opacity: 0,
            cycle: {
              rotationX: [-90, 90],
              transformOrigin: ['50% top -100', '50% bottom 100']
            }
          }}
          stagger={0.1}
        >
          <div id="banner2"> 
  <div className="inline-block2"> <li>2020 - Head of Communications Coordinator for the McGill Engineering Orientation Week </li> </div>
  <div className="inline-block2"><a href="https://oweek.mcgilleus.ca/#/home"><img src={link} alt="logo"/></a></div>
  <div className="inline-block2"><a href="https://www.youtube.com/c/McGillEngineeringOrientationWeek/"><img src={youtube} alt="logo"/></a></div>
  <div className="inline-block2"><a href="https://www.instagram.com/engineeringfrosh/"><img src={insta} alt="logo"/></a></div>
  <div className="inline-block2"><a href="https://www.facebook.com/EngineeringFrosh/"><img src={facebook} alt="logo"/></a></div>
  </div>

  <div id="banner2"> 
  <div className="inline-block2"> <li>2018 - 2020 Chair of the Plumber's Station | Engineering Videography and film committee</li> </div>
  
  <div className="inline-block2"><a href="https://www.youtube.com/channel/UCx7REwIt-qeIGq9Ygl4pChw"><img src={youtube} alt="logo"/></a></div>
  <div className="inline-block2"><a href="https://www.instagram.com/theplumbersstationmcgill/"><img src={insta} alt="logo"/></a></div>
  <div className="inline-block2"><a href="https://www.facebook.com/ThePlumbersStationMcGill/"><img src={facebook} alt="logo"/></a></div>
  </div>
         
  <div id="banner2"> 
  <div className="inline-block2"> <li>2019-2020 VP Communications for the Electrical, Computer and Software Engineering Student Society</li> </div>

  
  <div className="inline-block2"><a href="https://www.instagram.com/mcgill_ecsess/"><img src={insta} alt="logo"/></a></div>
  <div className="inline-block2"><a href="https://www.facebook.com/ECSESS/"><img src={facebook} alt="logo"/></a></div>
  </div>
        
  <div id="banner2"> 
  <div className="inline-block2"> <li>2018-2019 VP Administration for the Electrical, Computer and Software Engineering Student Society</li> </div>

  
  <div className="inline-block2"><a href="https://www.instagram.com/mcgill_ecsess/"><img src={insta} alt="logo"/></a></div>
  <div className="inline-block2"><a href="https://www.facebook.com/ECSESS/"><img src={facebook} alt="logo"/></a></div>
  </div>

  <div id="banner2"> 
  <div className="inline-block2"> <li>2017 Desjardins Community Engagement and Academic Success Scholarship</li> </div>

  
  
  </div>
  
          
        </Tween>
      </Scene>
    
      
    </Controller>
  
  </ListStyled>
);

export default List;