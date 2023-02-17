import React from "react";
import Footer from "../Components/footer";
import FormContact from "../Components/FormContact";
import HeroImg2 from "../Components/HeroImg2";
import Navbar from "../Components/navbar";
function Contact() {
   
    return (
    <div>
    <Navbar/>
        <HeroImg2 value={'Contact Info'} comments={'Happy to discuss about new endeavours'}/>
        <FormContact/>
        <Footer/>
    </div>
    )
}
export default Contact;