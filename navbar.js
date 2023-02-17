import "./Navbarcss.css";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';

function Navbar() {
    const [menu,setMenu] = useState(false);
    const clickHandler = ()=>setMenu(!menu);
    const [color,setColor] = useState(false);
    const scrollHandler = ()=>{
      if (window.scrollX >= 100) {
        setColor(true);
      }else{
        setColor(false);
      }
    }
    window.addEventListener("scroll",scrollHandler)
  return (
    <div className={ color ? "header-bg":"header"}>
    <Link to='/'>
        <h2>Portfolio</h2>
    </Link>
    <ul className={ menu ?  "nav-bar active":"nav-bar"}>
      <li>
          <Link to='/'>Home</Link>
      </li>
      <li>
          <Link to='/About'>About</Link>
      </li>
      <li>
          <Link to='/Contact'>Contact</Link>
      </li>
      <li>
          <Link to='/Project'>Project</Link>
      </li>   
     </ul>
       <div className="hamburger" onClick={clickHandler}>
        { menu ? (<FaTimes size={30} style={{color:'aliceblue'}}/>):(<FaBars size={30} style={{color:'aliceblue'}}/>)}
       </div>
    </div>
  )
}

export default Navbar;
