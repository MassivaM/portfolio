import React from  'react';
import {Route} from 'react-router-dom'
import ToHome from './ToHome'
import Home from './Home'


function About () {
    return(
        <div>
            <div>
            <ToHome />
            <Route exact path="/"component={Home}/>
            </div>
            <h1 style={{color:'white'}}> About me sho</h1>
        </div>
    )
}

export default About;