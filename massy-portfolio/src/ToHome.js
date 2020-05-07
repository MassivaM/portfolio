import React from "react";
import {Link} from "react-router-dom";

function ToHome(){
    return(
        <div className ="Nav">
            <ul class="nav"> 
            <li> <Link to="/">Home</Link> </li>
            </ul>
            </div>

    )
}

export default ToHome;