import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import { CalendarDay, CashCoin } from "react-bootstrap-icons";

const Bookings = () => {
  const { id } = useParams();
  console.log(id, "testing id");
  const {
    data: bookingData,
    isLoading: bookingIsLoading,
    error: bookingError,
  } = useFetch(`https://spot-swap-backend-02.onrender.com/booking`);
  const {
    data: offerData,
    isLoading: offerIsLoading,
    error: offerError,
  } = useFetch(`https://spot-swap-backend-02.onrender.com/alloffers`);
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
    const booking = bookings.filter((booking) => booking._id === bookingId);
    console.log(booking, "booking");
    try {
      const response = await fetch(
        `https://spot-swap-backend-02.onrender.com/${bookingId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const updatedBookings = bookings.filter(
          (booking) => booking._id !== bookingId
        );
        setBookings(updatedBookings);

        const id = booking[0].spot_id;
        const headers = { "Content-Type": "application/json" };
        const update = await fetch(
          `https://spot-swap-backend-02.onrender.com/${id}`,
          {
            method: "PUT",
            headers,
            body: JSON.stringify({ isAvailable: true }),
          }
        );
      } else {
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
  console.log(bookings);
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
            <div>
              {bookings.map((booking) => (
                <div className="booking" key={booking._id}>
                  <p>Parking name: {offers[booking.spot_id]?.offerName}</p>
                  <p>Address: {offers[booking.spot_id]?.street}</p>
                  <p>City: {offers[booking.spot_id]?.city}</p>
                  <p>
                    <CalendarDay />
                    <strong> Start Time: </strong>{" "}
                    {new Date(booking.start_time).toUTCString()}
                  </p>
                  <p>
                    <CalendarDay />
                    <strong> End Time: </strong>{" "}
                    {new Date(booking.end_time).toUTCString()}
                  </p>
                  <p>
                    <CashCoin /> Total cost: € : {booking.total_cost}
                  </p>
                  <p>Booking status: {booking.booking_status}</p>
                  <button
                    className="cancel_button"
                    onClick={() => handleDelete(booking._id)}
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
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
