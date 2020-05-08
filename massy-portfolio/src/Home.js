import React from  'react';
import {Route} from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import './Home.css'
import logo from './kiss2.png';

function Home () {

    return(
        <div>
            <Navbar />
            <Route exact path="/about"component={About}/>
                <div className ="tech">
                <div className="title">
                    <span> TECH <br></br>PROJECTS</span>
                    <img src={logo} className="figure" />  
                </div>
                 <div className = "enter">
                     Press k to view
                 </div>
                 </div>
        </div>
    )
}
export default Home;