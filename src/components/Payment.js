import React, { useState } from "react";

const CreditCardForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isBooked, setIsBooked] = useState(false);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
    onSubmit();
  };
  

  return (
    <div className="credit-card-form">
      <h3>Enter your credit card information</h3>
      {isBooked && (
        <div className="booking-message">Your spot has been booked!</div>
      )}
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
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default CreditCardForm;
