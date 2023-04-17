import React, { useState, useEffect } from "react";

const OfferRegistration = () => {
  const [offerName, setOfferName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [offerSize, setOfferSize] = useState(null);
  const [price, setPrice] = useState(null);
  const [availableFrom, setAvailableFrom] = useState(null);
  const [availableUntil, setAvailableUntil] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const url = "http://localhost:8001/offers";
  const userId = sessionStorage.getItem("userId");

  const postOffer = async (e) => {
    e.preventDefault();
    const headers = { "Content-Type": "application/json" };
    const payload = {
      userId,
      offerName,
      street,
      city,
      country,
      offerSize,
      price,
      availableFrom,
      availableUntil,
    };

    setOfferName("");
    setStreet("");
    setCity("");
    setCountry("");
    setOfferSize("");
    setPrice("");
    setAvailableFrom("");
    setAvailableUntil("");
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
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
    <div class="container">
      <h2>Register your offer</h2>
      <form>
        {/* Offer name */}
        <div class="form-group">
          <label for="offerName">Name</label>
          <input
            type="text"
            class="form-control"
            id="offerName"
            aria-describedby="emailHelp"
            placeholder="Give your offer a name"
            value={offerName}
            onChange={(e) => setOfferName(e.target.value)}
            required
          />
        </div>

        {/* Street */}
        <div class="form-group">
          <label for="street">Street, number</label>
          <input
            type="text"
            class="form-control"
            id="street"
            placeholder="Ex: Jahnstrasse, 2A"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>

        {/* City */}
        <div class="form-group">
          <label for="city">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            placeholder="Ex: Dusseldorf"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        {/* Country */}
        <div class="form-group">
          <label for="country">Country</label>
          <input
            type="text"
            class="form-control"
            id="country"
            placeholder="Ex: Germany"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        {/* -- Offer size */}
        <div class="form-group">
          <label for="offerSize">Offer size</label>
          <input
            type="text"
            class="form-control"
            id="country"
            placeholder="Ex: Small"
            value={offerSize}
            onChange={(e) => setOfferSize(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div class="form-group">
          <label for="price">Price (only numbers)</label>
          <input
            type="number"
            class="form-control"
            id="price"
            placeholder="Ex: 100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Available from */}
        <div class="form-group">
          <label for="availableFrom">Available from</label>
          <input
            type="datetime-local"
            class="form-control"
            id="availableFrom"
            placeholder="Tell us the address"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
            required
          />
        </div>

        {/* Available until */}
        <div class="form-group">
          <label for="availableUntil">Available until</label>
          <input
            type="datetime-local"
            class="form-control"
            id="availableUntil"
            placeholder="Tell us the address"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
            required
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={postOffer}>
          List my offer
        </button>
      </form>
    </div>
  );
};

export default OfferRegistration;
