import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import * as animationData from './pinjump.json'

class App extends Component {
  render() {
    const defaultOptions = {animationData: animationData};
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Lottie options={defaultOptions} height={500} width={500}/>
      </div>
    );
  }
}

export default App;
