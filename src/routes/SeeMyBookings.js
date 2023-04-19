
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Bookings = () => {
  const {
    data: bookingData,
    isLoading: bookingIsLoading,
    error: bookingError,
  } = useFetch(`http://localhost:8001/booking`);
  const {
    data: offerData,
    isLoading: offerIsLoading,
    error: offerError,
  } = useFetch(`http://localhost:8001/offers`);
  const [bookings, setBookings] = useState([]);
  const [offers, setOffers] = useState({});
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();

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
    <div className="booking-container">
      <h1>Hello user: {userId}</h1>
      <h1>See your bookings below:</h1>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <p>Parking name: {offers[booking.spot_id]?.offerName}</p>
              <p>Address: {offers[booking.spot_id]?.street}</p>
              <p>City: {offers[booking.spot_id]?.city}</p>
              <p>Start time: {booking.start_time}</p>
              <p>End time: {booking.end_time}</p>
              <p>Total cost € : {booking.total_cost}</p>
              <p>Booking status: {booking.booking_status}</p>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookings;

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
