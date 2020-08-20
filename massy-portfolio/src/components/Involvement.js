



import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Back } from 'gsap';
import { Tween, Timeline } from 'react-gsap';

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
      text-decoration : none
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
          <li>2020 - Head of Communications Coordinator for the McGill Engineering Orientation Week</li>
          <li>2018 - 2020 Chair of the Plumber's Station | Engineering Videography and film committee</li>
          <li>2019-2020 Vice-President of Communications for the Electrical, Computer and Software Engineering Student Society</li>
          <li>2018-2019 Vice-President of Administration for the Electrical, Computer and Software Engineering Student Society</li>
        
        </Tween>
      </Scene>
    
      
    </Controller>
    <div className="section" />
  </ListStyled>
);

export default List;