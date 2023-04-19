import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
      <h2>Payment Information</h2>
      <CreditCardForm onSubmit={handleSubmit} />
      {isBooked && (
        <div className="booking-message">Your spot has been booked!</div>
      )}
    </div>
  );
};

const CreditCardForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { id } = useParams();
  const url = `http://localhost:8001/offers/:${id}`;
  const isAvailable = false;

  // console.log(id, "checking id");
  // const type = typeof id;
  // console.log(type);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  const changeAvailable = async (e) => {
    e.preventDefault();
    const headers = { "Content-Type": "application/json" };
    const payload = {
      isAvailable,
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (e) {
      setError(e);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="credit-card-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-number">Card number:</label>
          <input
            type="text"
            id="card-number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="card-holder-name">Card holder name:</label>
          <input
            type="text"
            id="card-holder-name"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry date:</label>
          <input
            type="text"
            id="expiry-date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            required
          />
        </div>
        <button onClick={changeAvailable} type="submit">
          Book
        </button>
      </form>
    </div>
  );
};

export default Payment;
