import {useState} from "react";
import React from "react";
import Navbar from "../Components/navbar.js";
import Hero from "../Components/Hero.js";
import Footer from "../Components/footer.js";
function Home() {
   
    return (
    <div>
        <Navbar/>
        <Hero></Hero>
        <Footer/>
    </div>
    )
}
export default Home;