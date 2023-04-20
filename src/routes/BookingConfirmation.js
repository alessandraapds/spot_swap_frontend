import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check2Square } from "react-bootstrap-icons";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/SeeMyBookings");
    }, 3000);
  }, []);
  return (
    <div class="confirmation-page align-self-center">
      Booking confirmed <Check2Square />{" "}
    </div>
  );
};

export default BookingConfirmation;
