import React, { useState } from "react";

const Payment = () => {
  const [isBooked, setIsBooked] = useState(false);
  const userId = sessionStorage.getItem("userId");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="payment-container">
      <h1>Hello user: {userId}</h1>
      <h2>Your Spot has been booked</h2>
     
    </div>
  );
};


export default Payment;
