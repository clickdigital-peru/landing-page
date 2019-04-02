import React, { Component } from 'react';
import './Hero.css';
import laptopCode from 'assets/images/placeholder-b.png';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      width: 800
    }
  }
  render() {
    return (
      <header className="Hero">
        <div className="Dev-Slide">
          <div className="Text-Wrap">
            <h1>Perfect Development</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi dolor excepturi rerum illum fugit, voluptates animi?</p>
          </div>
          <div className="CallToAction">
            <a href="#">Order Development</a>

          </div>
          <div className="Image-Wrap">
            <img src={laptopCode} alt="Laptop with code in screen" />
          </div>
        </div>
        <div className="Design-Slide">

        </div>
      </header>
    );
  }
}

export default Hero;
