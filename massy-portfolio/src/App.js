import React from 'react';
import './App.css';
import Title from './Title';
import Home from './Home';
import Tech from './Tech';
import About from './About';
import Video from './Video';
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className = "App-logo">
        <Title />
        </div>
      <Route exact path="/"component={Home}/>
      <Route exact path="/tech"component={Tech}/>
      <Route exact path="/video"component={Video}/>
      <Route exact path="/about"component={About}/>
      
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  */

export default App;
