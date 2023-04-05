import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Signup from './Signup';

const Login = () => {
    
    const [input, setInput] = useState(null);
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  return (
<div className='login'>
    <div>
      <a class="nav-link active" onClick={onOpenModal}>Login</a>
      <Modal open={open} onClose={onCloseModal} center>
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
      <Signup />
      </Modal>
    </div>



    
</div>
  )
}

export default Login