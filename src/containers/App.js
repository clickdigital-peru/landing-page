import React, { Component } from 'react';
import logo from 'assets/images/logo.svg';
import './App.css';
import  Hero from  './Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
      </div>
    );
  }
}

export default App;
