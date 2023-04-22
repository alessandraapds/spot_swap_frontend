import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import {
  GeoAltFill,
  CalendarDay,
  CurrencyEuro,
  ExclamationDiamondFill,
  CashCoin,
} from "react-bootstrap-icons";
import "../styles/styles.css";

const Bookings = () => {
  const { id } = useParams();
  console.log(id, "testing id");
  const {
    data: bookingData,
    isLoading: bookingIsLoading,
    error: bookingError,
  } = useFetch(`http://localhost:8001/booking`);
  const {
    data: offerData,
    isLoading: offerIsLoading,
    error: offerError,
  } = useFetch(`http://localhost:8001/offers/alloffers`);
  const [bookings, setBookings] = useState([]);
  const [offers, setOffers] = useState({});
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  const headers = { "Content-Type": "application/json" };

  useEffect(() => {
    if (bookingData && offerData) {
      const filteredBookings = bookingData.filter(
        (booking) => booking.user_id === userId
      );
      setBookings(filteredBookings);
      const offersObj = offerData.reduce((obj, offer) => {
        obj[offer._id] = offer;
        return obj;
      }, {});
      setOffers(offersObj);
    }
  }, [bookingData, offerData, userId]);

  const handleDelete = async (bookingId) => {
    try {
      const update = await fetch(`http://localhost:8001/offers/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ isAvailable: true }),
      });
      if (update.ok) {
        setTimeout(() => {}, 3000);

        const response = await fetch(
          `http://localhost:8001/booking/${bookingId}`,
          {
            method: "DELETE",
          }
        );
        const updatedBookings = bookings.filter(
          (booking) => booking._id !== bookingId
        );
        setBookings(updatedBookings);
      }

      // if (response.ok) {
      //   // inside here to do the put request
      //   // setSuccess(true)
      //   // setTimeout(() => {
      //   // })
      // }
      else {
        throw new Error("Failed to delete booking.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (bookingIsLoading || offerIsLoading) {
    return <div>Loading...</div>;
  }

  if (bookingError || offerError) {
    return (
      <div>
        Error: {bookingError ? bookingError.message : offerError.message}
      </div>
    );
  }

  return (
    <wrapper>
      <div>
        <div className="BookingDetails">
          <h1>See your bookings</h1>
          <div></div>
        </div>
        <div className="booking-container">
          {/* <h1>Hello user: {userId}</h1> */}

          {bookings.length === 0 ? (
            <p>You have no bookings yet.</p>
          ) : (
            <ul>
              {bookings.map((booking) => (
                <li key={booking._id}>
                  <p>
                    <em>
                      <strong>{offers[booking.spot_id]?.offerName}</strong>
                    </em>
                  </p>
                  {/* <p>Address: {offers[booking.spot_id]?.street}</p>
                  <p>City: {offers[booking.spot_id]?.city}</p> */}
                  <p>
                    <GeoAltFill /> {offers[booking.spot_id]?.street} -{" "}
                    {offers[booking.spot_id]?.city},{" "}
                    {offers[booking.spot_id]?.country}
                  </p>
                  <p>
                    <CalendarDay />
                    <strong>Available from:</strong>
                    {new Date(booking.start_time).toUTCString()}
                  </p>
                  <p>
                    <CalendarDay />
                    <strong>Available until:</strong>
                    {new Date(booking.end_time).toUTCString()}
                  </p>
                  <p>
                    <CashCoin />
                    Total cost € : {booking.total_cost}
                  </p>
                  <p>
                    <strong>Booking status:</strong> {booking.booking_status}
                  </p>
                  <button
                    className="cancel_button"
                    onClick={() => handleDelete(booking._id)}
                  >
                    Cancel
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </wrapper>
  );
};

export default Bookings;

// export default Bookings;

// const Bookings = () => {
//   const { id } = useParams();
//   const { data, isLoading, error } = useFetch(`http://localhost:8001/booking`);
//   const [bookings, setBookings] = useState([]);
//   const userId = sessionStorage.getItem("userId");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (data) {
//       const filteredBookings = data.filter((booking) => booking.user_id === userId);
//       setBookings(filteredBookings);
//     }
//   }, [data, userId]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="booking-container">
//       <h1>Hello user: {userId}</h1>
//       <h1>See your bookings below:</h1>
//       {bookings.length === 0 ? (
//         <p>You have no bookings yet.</p>
//       ) : (
//         <ul>
//           {bookings.map((booking) => (
//             <li key={booking._id}>
//               <p>Parking name: {booking.spot_id}</p>
//               <p>Start time: {booking.start_time}</p>
//               <p>End time: {booking.end_time}</p>
//               <p>Total cost: {booking.total_cost}</p>
//               <p>Booking status: {booking.booking_status}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Bookings;
