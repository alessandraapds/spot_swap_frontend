import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const NewBooking = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`http://localhost:8001/booking`);
  console.log(data);
  const userId = sessionStorage.getItem("userId");
  // const userName = sessionStorage.getItem("userName");
  const [isBooked, setIsBooked] = useState(false);

  const fetch = async () => {
    try {
      const response = await fetch(`http://localhost:8001/booking`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isBooked: true,
        }),
      });
      if (response.ok) {
        setIsBooked(true);
      } else {
        throw new Error("Failed to mark the offer as booked.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="booking-container">
      <h1>Hello user: {userId}</h1>
      <h1> See your bookings below :</h1>
      <p className="booking-detail">Parking name: {data.start_time}</p>
    </div>
  );
};

export default NewBooking;
