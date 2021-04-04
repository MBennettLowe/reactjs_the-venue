import React, { Component } from 'react'
import './resources/styles.css';

// Components
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/index';
import VenueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import { Element } from 'react-scroll';


function App() {
  return (
    <div className="App" style={{height:"1500px", background:'cornflowerblue'}}>
      <Header />

      <Element name="Featured">
        <Featured />
      </Element>
      
      <Element name="VenueNfo">
        <VenueNfo />
      </Element>


      <Element name="Highlights">
        <Highlights />
      </Element>
      
      <Element name="Pricing">
        <Pricing />
      </Element>

      <Element name="Location">
       <Location />
      </Element>

      <Footer />
     
    </div>
  );
}

export default App;
