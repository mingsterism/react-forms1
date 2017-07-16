import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button1 from './components/button1.js';
import Signup from './components/signupsheet.js';
import Forms2 from './components/forms2.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button1 />
        <Forms2 />
      </div>
    );
  }
}

export default App;
