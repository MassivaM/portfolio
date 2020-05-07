// src/Title.js
import './Title.css';
import logo from './massy logo.png';
import React from 'react'

function Title() {
    return (
      <div className="Title">
        <header>
        <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }

export default Title