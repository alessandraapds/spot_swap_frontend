import React, { useState } from 'react'
import Navbar from "../components/NavBar";
import Login from './Login';
import { Route, Routes } from "react-router-dom";



const Signup = () => {
    
    const [input, setInput] = useState(null);

  return (
<div className='signup'>
    <div>Sign Up</div>
  
    <form>
        <label>
            First Name: 
            <input type="text" name="firstName" value={input}  onChange={(e) => setInput(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            Last Name: 
            <input type="text" name="lastName" value={input}  onChange={(e) => setInput(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            Select username: 
            <input type="text" name="username" value={input}  onChange={(e) => setInput(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            E-mail: 
            <input type="text" name="email" value={input}  onChange={(e) => setInput(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            Password: 
            <input type="text" name="password" value={input}  onChange={(e) => setInput(e.target.value)}></input>      
         </label>
         <br></br>
         <br></br>
         <input type="submit" value="Sign Up"></input>
         
    </form>
        <br></br>
    <p>Already registered?</p>
    <a class="nav-link active" aria-current="page" href="/login">
             Login
    </a>
</div>
  )
}

export default Signup