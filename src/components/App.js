import React, { Component } from 'react';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import LastWork from './LastWork/LastWork';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Hero />
        <WhoWeAre />
        <LastWork />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;

