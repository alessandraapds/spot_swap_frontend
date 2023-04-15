import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OfferConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);
  return <div>Offer registered with success!</div>;
};

export default OfferConfirmation;
