import React from  'react';
import Pdf from '../assets/resume.pdf'
import Involvement from '../components/Involvement.js'
export default function About () {
    return(

    
        <div >
 
    
 <div className="container-fluid home">
        <div className="experience">
        <h1 className="title-exp" data-aos="zoom-in-down">about me</h1>
        <div className="container" style={{maxWidth:"800px"}}>
        <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
        <p className="paragraph" data-aos="fade-up-right">Hello! My name is Massy and I'm a software engineering student from McGill University (grad May 2021) with a passion for web development and graphics. I'm also a freelance videographer and editor and use Adobe After Effects, Premiere Pro and Illustrator. My CV can be found <a href = {Pdf} target = "_blank">here</a>   :)</p> 
        </div>
        </div>
        </div>
        </div>
   
        </div>
        </div>
    )
}

