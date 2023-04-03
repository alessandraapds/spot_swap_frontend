import React from "react";
import useFetch from "../hooks/useFetch";

const Offers = () => {
  const url = "http://localhost:8001/offers";
  const { data, isLoading, error } = useFetch(url);

  return data.map((offer) => {
    return (
      <div class="container">
        <div class="row">
          <div class="col-2"> Picture</div>
          <div class="col-3">
            <div>Offer name: {offer.offerName}</div>
            <div>Available from: {offer.startAvailableDate}</div>
            <div>Available until: {offer.endAvailableDate}</div>
          </div>
          <div class="col-3">
            <div>Price/hour: {offer.pricePerHour}</div>
            <button>Book spot</button>
          </div>
          <div class="col-2">
            <div>map</div>
          </div>
        </div>
      </div>
    );
  });
};

export default Offers;
