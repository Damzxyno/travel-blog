import React from 'react';
import "../component/css/hero.css"
import video1 from "../videos/video1.mp4";
import Button from './Button'

function Hero() {
  return (
    <div className="hero-container">
      <video src={video1} muted replay autoPlay />
    <h1>ADVENTURES GALLORE</h1>
    <p>Wanna have a nice time?</p>
    <div className="hero-btns">
      <Button 
      className="btns" 
      buttonStyle="btn--outline"
      buttonSize="btn-large" >
          Get Started
      </Button>
      <Button 
      className="btns" 
      buttonStyle="btn--primary"
      buttonSize="btn--large" >
          Watch Trailer 
          {<i className="far fa-play-circle"/>}
      </Button>
    </div>
    </div>
  )
}

export default Hero