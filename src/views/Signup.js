import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Login from './Login';


const Signup = () => {
    
    const [input, setInput] = useState(null);

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  return (

<div className='signup'>

    <div>
      <a class="nav-link active" onClick={onOpenModal}>Sign Up</a>
      <Modal open={open} onClose={onCloseModal} center>
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
    <Login />
      </Modal>
    </div>
  
    
       
</div>
  )
}

export default Signup