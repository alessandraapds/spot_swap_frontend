import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Payment from "../components/Payment";


const NewBooking = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8001/offers/${id}`
  );
  console.log(id);
  const userId = sessionStorage.getItem("userId");
  const userName = sessionStorage.getItem("userName");
  const navigate = useNavigate();
  // const handleBookSpot = (id) => {
  //    console.log("Hello", id);
  //   // navigate("/Payment/" + id);
  // };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const handleBookSpot = (id) => {
  //   // console.log("Hello", id);
  //   // navigate("/bookings/" + id);
  //   navigate("/Payment/" + id);
  // }

  // const handleBookSpot = () => {
  //   navigate(`/Payment/${id}`);
  // };
  // pass the user ID as a prop to the Payment component 
  const handleBookSpot = () => {
    navigate(`/Payment/${id}`, { state: { userId } });
  };

  return (
    <div className="booking-container">
    <h1>Hello user: {userId}</h1>
    <h1>Hello user: {userName}</h1>
    <h2>Your booking details</h2>
    <p className="booking-detail">Parking name: {data.offerName}</p>
    <p className="booking-detail">Address: {data.street}</p>
    <p className="booking-detail">City: {data.city}</p>
    <p className="booking-detail">Size: {data.offerSize}</p>
    <p className="booking-detail">Parking Spot available:</p>
    <p className="booking-detail">from : {data.availableFrom}</p>
    <p className="booking-detail">until : {data.availableUntil}</p>
    <p className="booking-detail">Total Price €:{data.price}</p>
    <p className="booking-detail"> * Free cancellation up to 24 hours prior to arrival  </p>
    <button className="book-button" onClick={() => handleBookSpot(Payment._id)}>Book this spot</button>
  </div>
);
};

export default NewBooking;
