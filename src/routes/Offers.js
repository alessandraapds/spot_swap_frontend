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

  console.log(data, "testing datarespose");

  const handleBookSpot = (id) => {
    // console.log("Hello", id);
    navigate("/bookings/" + id);
    // navigate("/Payment/" + id);
  };
  return (
    <div>
      {/* <h4>All available spots</h4> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : !keyword ? (
        data.map((offer) => {
          return (
            <div class="container offer-list">
              <div class="row align-self-center">
                <div class="col-5 align-self-center">
                  <div>
                    <em>
                      <strong>{offer.offerName}</strong>
                    </em>
                  </div>
                  <div>
                    <GeoAltFill /> {offer.street} - {offer.city},{" "}
                    {offer.country}
                  </div>
                  <div>
                    {" "}
                    <CalendarDay />
                    Available from:{" "}
                    {new Date(offer.availableFrom).toUTCString()}
                  </div>
                  <div>
                    {" "}
                    <CalendarDay />
                    Available until:{" "}
                    {new Date(offer.availableUntil).toUTCString()}
                  </div>
                </div>
                <div class="col-3 align-self-center">
                  <div>
                    Price: <CurrencyEuro />
                    {offer.price}
                  </div>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => handleBookSpot(offer._id)}
                  >
                    Book spot
                  </button>
                </div>
                <div class="col-4">
                  <Maps street={offer.street} city={offer.city} />
                </div>
              </div>
            </div>
          );
        })
      ) : data.find(
          (listing) =>
            listing.offerName.toLowerCase().includes(keyword.toLowerCase()) ||
            listing.city === keyword
        ) ? (
        data.map((offer) => {
          if (
            offer.offerName.toLowerCase().includes(keyword.toLowerCase()) ||
            offer.city === keyword
          ) {
            return (
              <div class="container offer-list">
                <div class="row">
                  <div class="col-5">
                    <div>
                      <em>
                        <strong>{offer.offerName}</strong>
                      </em>
                    </div>
                    <div>
                      <GeoAltFill /> {offer.street} - {offer.city},{" "}
                      {offer.country}
                    </div>
                    <div>
                      {" "}
                      <CalendarDay />
                      Available from:{" "}
                      {new Date(offer.availableFrom).toUTCString()}
                    </div>
                    <div>
                      {" "}
                      <CalendarDay />
                      Available until:{" "}
                      {new Date(offer.availableUntil).toUTCString()}
                    </div>
                  </div>
                  <div class="col-3">
                    <div>
                      Price: <CurrencyEuro />
                      {offer.price}
                    </div>
                    <button type="button" class="btn btn-success">
                      Book spot
                    </button>
                  </div>
                  <div class="col-2">
                    <Maps street={offer.street} city={offer.city} />
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <p>
          <strong>No matches found</strong>
        </p>
      )}
    </div>
  );
};

export default Offers;
