import React from 'react'
import Earth from './images/nasa-Q1p7bh3SHj8-unsplash (2).jpg'
import {Link} from 'react-router-dom';
import "./Herostyle.css"
const Hero = () => {
  return (
    <div className='homeStyles'>
        <div className='image-style'>
            <img className='intro-image' src={Earth} />
        </div> 
        <div className='Contents'>
            <p>Hi I am Sukalyan</p>
            <h1>React Developer</h1>
            <Link to='/Project' className='btn'>Project</Link>
            <Link to='/Contact' className='btn-light'>Contact</Link>
        </div>
    </div>
  )
}

export default Hero
