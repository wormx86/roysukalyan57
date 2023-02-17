import React, { Component, useReducer, useState } from 'react'
import './formstyles.css'
import Resume from "./images/Sukalyan_Resume.pdf"

import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';


function FormContact(props) {
  //constructor(props){
    //super(props);
    //this.state={
      //name:'',
      //email:'',
      //subject:'',
      //message:'',
      //loading:false
    //};
 // }
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[subject,setSubject] = useState("");
  const[message,setMessage] = useState("");
  const[loading,setLoading] = useState(false);
  const submitHandler =(e)=>{
   // const API_PATH = 'http://localhost:3000/react-contact-form/api/contact/send-email.php';
   //http://localhost:3000/portfolio-react/src/Components/send-email.php
   //const config = {
 
  // Request body
   //const data = JSON.stringify({
    //name:name,email:email,subject:email,message:message
   //})
    e.preventDefault();
    axios.post(`http://localhost:8080/sendmail`,{"subject":subject,"to":email,"message":message})
    .then((res)=>{
      setLoading(false);
      console.log(res.data);
    })
    .catch((err)=>{
      setLoading(false);
      console.log(err);
    })
  }
 return(
    <div className='Container'>
      <ToastContainer position='bottom-center' limit={1}/>
            <form method='post'  action='send-email.php' onSubmit={submitHandler}>
              <input type="text" name="name" id='name' value={name} placeholder="Your Name" onChange={(e)=>setName(e.target.value)} required/>
              <input type="email" name="email" id='email' value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
              <input type="text" name="subject" id='subject' value={subject} placeholder="Subject" onChange={(e)=>setSubject(e.target.value)} required/>
              <textarea name="Message" id='Message' rows="10" value={message} placeholder="Your Queries" onChange={(e)=>setMessage(e.target.value)}></textarea>
              <button type="submit"  disabled={loading}>
              {loading? 'Sending...':'Submit'}
              </button>
            </form>
    </div>
    )
}

export default FormContact
