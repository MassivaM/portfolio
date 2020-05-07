import React from "react";
import {Link} from "react-router-dom";
import './Nav.css'

function NavBar(){
    return(
        <div className ="Nav">
            <ul> 
            <li> <Link to="/about">About me</Link> </li>
            </ul>
            </div>

    )
}

export default NavBar;