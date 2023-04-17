import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check2Square } from "react-bootstrap-icons";

const OfferConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);
  return (
    <div class="confirmation-page align-self-center">
      Offer registered with success! <Check2Square />{" "}
    </div>
  );
};

export default OfferConfirmation;
