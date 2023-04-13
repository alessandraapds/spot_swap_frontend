

import React from 'react'
import { useNavigate } from "react-router-dom";

export const MyBookings = () => {
  const userId = sessionStorage.getItem("userId")
  // const token = sessionStorage.getItem("jwt");
const navigate = useNavigate();
const handleBookSpot = () => {
    navigate('/Payment');
  }
  return (
    <div> 
      <h1>Welcome user:{userId} to your booking information</h1>
      <br></br>
      <h2>Your bookings details </h2>
      <button onClick={handleBookSpot}> Book this spot</button>
    </div>
  )
}

export default MyBookings;






