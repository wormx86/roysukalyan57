import React, { useContext, useState } from "react";
import Footer from "../Components/footer";
import HeroImg2 from "../Components/HeroImg2";
import Navbar from "../Components/navbar";
export const HeadingContext = React.createContext();
function Project(props) {
    return (
    <div>
         <Navbar/>
         <HeroImg2 value={'My Works'} comments={'Here are some of my works'}/>
         <Footer/>
    </div>
    )
}
export default Project;