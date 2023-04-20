import React, { useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
import "../styles/styles.css";
import {
  GeoAltFill,
  CalendarDay,
  CurrencyEuro,
  ExclamationDiamondFill,
  CashCoin,
} from "react-bootstrap-icons";
import Maps from "../components/Maps";
import { useNavigate } from "react-router-dom";
import Background from "../styles/logo1.png";

const Offers = ({ keyword, myRef }) => {
  const url = "http://localhost:8001/offers";
  const { data, isLoading, error } = useFetch(url);
  const navigate = useNavigate();

  const handleBookSpot = (id) => {
    // console.log("Hello", id);
    navigate("/bookings/" + id);
    // navigate("/Payment/" + id);
  };

  const showNewSearch = () => {
    window.location.reload(false);
  };

  return (
    <div
    // ref={myRef}
    // style={{
    //   backgroundImage: `url(${Background})`,
    //   width: "100%",
    // }}
    >
      {/* <h4>All available spots</h4> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : !keyword ? (
        data.map((offer) => {
          return (
            <div class="container offer-list">
              <div class="row align-self-center ">
                <div class="col-5 align-self-center ">
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
                    <strong> Available from: </strong>
                    {new Date(offer.availableFrom).toUTCString()}
                  </div>
                  <div>
                    {" "}
                    <CalendarDay />
                    <strong> Available until: </strong>
                    {new Date(offer.availableUntil).toUTCString()}
                  </div>
                </div>
                <div class="col-3 align-self-center ">
                  <div>
                    <strong>
                      <CashCoin /> Price:
                    </strong>{" "}
                    <CurrencyEuro />
                    {offer.price}
                  </div>
                  <button
                    type="button"
                    class="booking-button"
                    onClick={() => handleBookSpot(offer._id)}
                  >
                    Book spot
                  </button>
                </div>
                <div class="col-4 ">
                  <Maps street={offer.street} city={offer.city} />
                </div>
              </div>
            </div>
          );
        })
      ) : data.find(
          (listing) =>
            listing.offerName.toLowerCase().includes(keyword.toLowerCase()) ||
            listing.city.toLowerCase() === keyword.toLowerCase()
        ) ? (
        data.map((offer) => {
          if (
            offer.offerName.toLowerCase().includes(keyword.toLowerCase()) ||
            offer.city.toLowerCase() === keyword.toLowerCase()
          ) {
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
                      <strong> Available from: </strong>
                      {new Date(offer.availableFrom).toUTCString()}
                    </div>
                    <div>
                      {" "}
                      <CalendarDay />
                      <strong> Available until: </strong>
                      {new Date(offer.availableUntil).toUTCString()}
                    </div>
                  </div>
                  <div class="col-3 align-self-center">
                    <div>
                      <strong>
                        <CashCoin /> Price:
                      </strong>{" "}
                      <CurrencyEuro />
                      {offer.price}
                    </div>
                    <button
                      onClick={() => handleBookSpot(offer._id)}
                      type="button"
                      class="booking-button"
                    >
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
        <div class="no-matches" ref={myRef}>
          <h4>
            <ExclamationDiamondFill />
            No matches found!
          </h4>
          <button class="btn btn-warning" onClick={showNewSearch}>
            <strong>New search</strong>
          </button>
        </div>
      )}
    </div>
  );
};

export default Offers;
