import "../css/home.css";
import React, {Fragment} from 'react'
import Hero from "../Hero";
import Card from "../Card";
import Footer from "../Footer";

function Home() {
  return (
      <div>
        <Hero /> 
        <Card />
        <Footer />
      </div>
  )
}

export default Home