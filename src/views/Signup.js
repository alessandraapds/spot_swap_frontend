import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Login from './Login';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const api_url = process.env.REACT_APP_BACKEND_URL;

   const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = {username, password, firstName, lastName, contactEmail};
      const headers = {'Content-Type': 'application/json'}
      setLoading(true)
      try{
         const response = await fetch(api_url + "user/signup", {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
         });
         if(response.ok) {
            setSuccess(true)
            setTimeout(() => {
               navigate('/login')
            })
            } else {
               const errorData = await response.json();
               throw new Error(errorData.message)
         }

      } catch(e){
         setError(e)
         setTimeout(() => {
            setError(null)
         }, 3000)
      } finally {
         setLoading(false)

      }
   };

  return (
   <div>
{loading && <p>Loading</p>}
{error && <p>Error: {error.message}</p>}
{success && <p>Sign Up Successful</p>}
{!loading && !error && !success && (

<div className='signup'>

    <div>
      <a class="nav-link active" onClick={onOpenModal}>Sign Up</a>
      <Modal open={open} onClose={onCloseModal} center>
         <h2>Sign Up</h2>
         <br></br>
      <form className='userform' onSubmit={handleSubmit}>
        <label>
            First Name: 
            <input type="text" name="firstName" value={firstName}  onChange={(e) => setFirstName(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            Last Name: 
            <input type="text" name="lastName" value={lastName}  onChange={(e) => setLastName(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            Select username: 
            <input type="text" name="username" value={username}  onChange={(e) => setUsername(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            E-mail: 
            <input type="email" name="email" value={contactEmail}  onChange={(e) => setContactEmail(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            Password: 
            <input type="text" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}></input>      
         </label>
         <br></br>
         <br></br>
         <button type="submit" value="Sign Up">Sign Up</button>
         
    </form> 
    <br></br>
    </Modal>

    </div>
  
    
       
</div>
)}
</div>
  )
}

export default Signup