import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/styles.css";
import { GeoAltFill, CalendarDay, CurrencyEuro } from "react-bootstrap-icons";
import Maps from "../components/Maps";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const url = "http://localhost:8001/offers";
  const { data, isLoading, error } = useFetch(url);
  const navigate = useNavigate();

  console.log(data, "testing api");

  const handleBookSpot = (id) => {
    // console.log("Hello", id);
    navigate("/bookings/" + id);
  };
  return (
    <div>
      <h2>Check all our available spots</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((offer) => {
          return (
            <div class="container offer-list">
              <div class="row">
                <div class="col-2"> Picture</div>
                <div class="col-5">
                  <div>
                    <strong>{offer.offerName}</strong>
                  </div>
                  <div>
                    <GeoAltFill /> {offer.street} - {offer.city}
                  </div>
                  <div>
                    {" "}
                    <CalendarDay />
                    Available from: {offer.startAvailableDate}
                  </div>
                  <div>
                    {" "}
                    <CalendarDay />
                    Available until: {offer.endAvailableDate}
                  </div>
                </div>
                <div class="col-3">
                  <div>
                    Price: <CurrencyEuro />
                    {offer.pricePerHour}
                  </div>
                  <button onClick={() => handleBookSpot(offer._id)}>
                    Book spot
                  </button>
                </div>
                <div class="col-2">
                  <div>map</div>
                </div>
              </div>
            </div>
          );
        })
      )}
      <Maps />
    </div>
  );
};

export default Offers;
