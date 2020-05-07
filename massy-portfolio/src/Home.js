import React from  'react';
import {Route} from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
//import './Home.css'


function Home () {
    return(
        <div>
            <div className="Nav">
            <Navbar />
            <Route exact path="/about"component={About}/>
            </div>
            <h1 style={{color:'white'}}> Welcome to my website!</h1>
        </div>
    )
}

export default Home;