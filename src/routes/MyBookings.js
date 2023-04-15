import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const MyBookings = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8001/offers/${id}`
  );
  console.log(id);
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  const handleBookSpot = () => {
    navigate("/Payment");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Hello user: {userId}</h1>
      <br />
      <h2>Your booking details</h2>
      <p>Parking name: {data.offerName}</p>
      <p>Address: {data.street}</p>
      <p>Postal Code: {data.postalCode}</p>
      <p>City: {data.city}</p>
      <p>Size: {data.offerSize}</p>
      <p>Price €:{data.price}</p>

      <button onClick={handleBookSpot}>Book this spot</button>
    </div>
  );
};

export default MyBookings;
