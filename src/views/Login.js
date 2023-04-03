import React, { useState } from 'react'
import Navbar from "../components/NavBar";






const Login = () => {
    
    const [input, setInput] = useState(null);

  return (
<div className='login'>
    <div>Login</div>
  
    <form>
         <label>
            Username: 
            <input type="text" name="username" value={input}  onChange={(e) => setInput(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            Password: 
            <input type="text" name="password" value={input}  onChange={(e) => setInput(e.target.value)}></input>      
         </label>
         <br></br>
         <br></br>
         <input type="submit" value="Login"></input>
        
    </form>
    <br></br>
    <p>Not already registered?</p>
        <a class="nav-link" aria-current="page" href="/signup">
                Sign Up
        </a>
</div>
  )
}

export default Login