import React from  'react';
import {Route} from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import './Home.css'


function Home () {
    return(
        <div>
            <Navbar />
            <Route exact path="/about"component={About}/>
                <div className ="tech">
                <div className = "title">
                    <h1></h1>
                    <h1> TECH PROJECTS</h1>
                 </div>
                 </div>
            
         
        </div>
    )
}

export default Home;