import React from "react";

const Offers = () => {
  const offersArray = [
    {
      _id: "642683024454d8e663574237",
      offerName: "Christina garage",
      latitude: 51.51,
      longitude: 7.46,
      street: "Eberstrasse 26",
      city: "Dortmund",
      postalCode: 44145,
      startAvailableDate: "2023-05-05T14:30:00.000Z",
      endAvailableDate: "2023-05-07T21:30:00.000Z",
      offerSize: "small",
      pricePerHour: 40,
      isAvailable: true,
    },
    {
      _id: "642683024454d8e663574239",
      offerName: "Available parking",
      latitude: 51.51,
      longitude: 7.46,
      street: "Burgweg 16",
      city: "Dortmund",
      postalCode: 44145,
      startAvailableDate: "2023-05-05T18:00:00.000Z",
      endAvailableDate: "2023-05-10T20:45:00.000Z",
      offerSize: "medium",
      pricePerHour: 60,
      isAvailable: false,
    },
  ];

  return offersArray.map((offer) => {
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
