import React from 'react'
import { FaEnvelope, FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import Contact from '../Routes/contact'
import "./footerStyles.css"

const Footer = () => {
  return (
    <div className='rows'>
         <div className='left'>
           <div className='location'>
              <FaHome size={30} style={{color:"#fff",marginRight:"2rem"}}/><p>
                 <span>123 Downtown street</span>NYC</p>
           </div>
           <div className='phone'>
             <h4>
             <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              12345677</h4>
           </div>
           <div className='email'>
            <h4>
            <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                  example@gmail.com
            </h4>
           </div>
          </div> 
          <div className='right'>
            <div className='Company'>
              <h2>Know More...</h2>
              <p>Hi I am a Frontend Developer enthusiastic about meeting new people and learning technology.<br/>Looking forward to discuss about new projects and endevours.
                <br/>Make sure to put a like and follow on social media!!
              </p>
            </div>
            <div className='social'>
              <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              <FaInstagram size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            </div>
          </div>
    </div>
  )
}

export default Footer
