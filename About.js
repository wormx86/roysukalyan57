import React from "react";
import Footer from "../Components/footer";
import HeroImg2 from "../Components/HeroImg2";
import Navbar from "../Components/navbar";
import Career from "../Components/Career";

function About() {
   
    return (
        <div id="about">
        <Navbar/>
        <HeroImg2 value={'About Me'} comments={'My Education and Achievements'}/>
        <Career/>
        <Footer/>
      </div>)
}
export default About;