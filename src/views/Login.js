import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const api_url = process.env.REACT_APP_BACKEND_URL;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = { username, password };
      const headers = {'Content-Type': 'application/json'}
      setLoading(true)
      try{
         const response = await fetch(api_url + "user/login", {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
         });
         if(response.ok) {
          const { token, id } = await response.json();
          sessionStorage.setItem("jwt", token);
          sessionStorage.setItem("userId", id)
          setSuccess(true)
            setTimeout(() => {
               navigate('/home')
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
{success && <p>Login Successful</p>}
{!loading && !error && !success && (
      <div className='login'>
    <div>
      <a class="nav-link active" onClick={onOpenModal}>Login</a>
      <Modal open={open} onClose={onCloseModal} center classNames={{
          modal: 'customModal'
        }}>
      <h2>Login</h2>
         <br></br>
      <form className='userform' onSubmit={handleSubmit}>
         <label>
            Username: 
            <input type="text" name="username" value={username}  onChange={(e) => setUsername(e.target.value)}></input>      
         </label>
         <br></br>
         <label>
            Password: 
            <input type="text" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}></input>      
         </label>
         <br></br>
         <br></br>
         <button type="submit" value="Login">Login</button>
        
    </form>
    <br></br>
      </Modal>
    </div>



    
</div>
    )}
</div>
  )
}

export default Login