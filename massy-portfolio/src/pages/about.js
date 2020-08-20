import React from  'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PageRenderer from '../page-renderer'
import SvgLines from 'react-mt-svg-lines';  
import { ReactSVG } from 'react-svg'
import kontrolrdarrow from '../assets/images/kontrol-rd-arrow.svg'
import kontrolrd from '../assets/images/kontrol-rd.svg'
import {Helmet} from "react-helmet";

export default function About () {
    return(

    
        <div style={{paddingTop:150}}>
 



  <SvgLines animate={ true } duration={ 50000 }>

  <ReactSVG src={kontrolrd} />

  </SvgLines>
  <SvgLines animate={ true } duration={ 500 }>
  <svg viewBox="0 0 100 100">
    <path stroke="green" strokeWidth="10" fill="none" d="M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5" />
  </svg>
</SvgLines>
    
        </div>
    )
}

