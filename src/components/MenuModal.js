import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Signup from '../views/Signup';
import Login from '../views/Login';



const MenuModal = () => {

      const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  return (
    <div>MenuModal
        <button onClick={onOpenModal}>Open</button>
    <Modal open={open} onClose={onCloseModal} center>
      {}
        <Login />
      
        

    </Modal>

    </div>
  )
}

export default MenuModal