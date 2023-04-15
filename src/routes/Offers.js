import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/styles.css";
import { GeoAltFill, CalendarDay, CurrencyEuro } from "react-bootstrap-icons";
import Maps from "../components/Maps";
import { useNavigate } from "react-router-dom";

const Offers = ({ keyword }) => {
  const url = "http://localhost:8001/offers";
  const { data, isLoading, error } = useFetch(url);
  const navigate = useNavigate();

  // console.log(data, "testing api");

  const handleBookSpot = (id) => {
    // console.log("Hello", id);
    navigate("/bookings/" + id);
    // navigate("/Payment/" + id);
  };
  return (
    <div>
      <h2>Check all our available spots</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : !keyword ? (
        data.map((offer) => {
          return (
            <div class="container offer-list">
              <div class="row">
                <div class="col-5">
                  <div>
                    <strong>{offer.offerName}</strong>
                  </div>
                  <div>
                    <GeoAltFill /> {offer.street} - {offer.city},{" "}
                    {offer.country}
                  </div>
                  <div>
                    {" "}
                    <CalendarDay />
                    Available from: {offer.availableFrom}
                  </div>
                  <div>
                    {" "}
                    <CalendarDay />
                    Available until: {offer.availableUntil}
                  </div>
                </div>
                <div class="col-3">
                  <div>
                    Price: <CurrencyEuro />
                    {offer.price}
                  </div>
                  <button onClick={() => handleBookSpot(offer._id)}>
                    Book spot
                  </button>
                </div>
                <div class="col-2">
                  <Maps street={offer.street} city={offer.city} />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        data.map((offer) => {
          if (offer.offerName.toLowerCase().includes(keyword.toLowerCase())) {
            return (
              <div class="container offer-list">
                <div class="row">
                  <div class="col-5">
                    <div>
                      <strong>{offer.offerName}</strong>
                    </div>
                    <div>
                      <GeoAltFill /> {offer.street} - {offer.city},{" "}
                      {offer.countru}
                    </div>
                    <div>
                      {" "}
                      <CalendarDay />
                      Available from: {offer.availableFrom}
                    </div>
                    <div>
                      {" "}
                      <CalendarDay />
                      Available until: {offer.availableUntil}
                    </div>
                  </div>
                  <div class="col-3">
                    <div>
                      Price: <CurrencyEuro />
                      {offer.price}
                    </div>
                    <button>Book spot</button>
                  </div>
                  <div class="col-2">
                    <Maps street={offer.street} city={offer.city} />
                  </div>
                </div>
              </div>
            );
          }
        })
      )}
    </div>
  );
};

export default Offers;
