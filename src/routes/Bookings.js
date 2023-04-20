import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import { Spinner } from "react-bootstrap";

// import Payment from "../components/Payment";

const NewBooking = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8001/offers/${id}`,
    { delay: 1000 }
  );
  console.log(id);
  const userId = sessionStorage.getItem("userId");
  const userName = sessionStorage.getItem("userName");

  const navigate = useNavigate();

  // const handleBookSpot = (id) => {
  //    console.log("Hello", id);
  //   // navigate("/Payment/" + id);
  // };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const handleBookSpot = (id) => {
  //   // console.log("Hello", id);
  //   // navigate("/bookings/" + id);
  //   navigate("/Payment/" + id);
  // }

  // const handleBookSpot = () => {
  //   navigate(`/Payment/${id}`);
  // };
  // pass the user ID as a prop to the Payment component

  const handleBookSpot = async (e) => {
    e.preventDefault();
    const booking_status = "booked";
    const user_id = userId;
    const spot_id = id;
    const start_time = data.availableFrom;
    const end_time = data.availableUntil;
    const total_cost = data.price;

    const payload = {
      booking_status,
      user_id,
      spot_id,
      start_time,
      end_time,
      total_cost,
    };

    const headers = { "Content-Type": "application/json" };
    // setLoading(true)
    try {
      const response = await fetch(`http://localhost:8001/booking/newBooking`, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const update = await fetch(`http://localhost:8001/offers/${id}`, {
          method: "PUT",
          headers,
          body: JSON.stringify({ isAvailable: false }),
        });
        if (update.ok) {
          setTimeout(() => {}, 3000);
        }

        // inside here to do the put request
        // setSuccess(true)
        // setTimeout(() => {
        // })
      } else {
        //  const errorData = await response.json();
        //  throw new Error(errorData.message)
      }
    } catch (e) {
      //  setError(e)
      //  setTimeout(() => {
      //     setError(null)
      //  }, 3000)
    } finally {
      navigate("/bookingconfirmation");
    }

    // navigate(`/payment/${id}`, { state: { userId } });
  };

  return (
    <div>
      <div>
        {/* <h1>Hello user: {userId}</h1> */}
        {/* <h1>Hello user: {userName}</h1> */}
        <h2 className="BookingDetails"> Booking Details</h2>
        <div className="booking-container">
          <p className="booking-detail">Parking name: {data.offerName}</p>
          <p className="booking-detail">Address: {data.street}</p>
          <p className="booking-detail">City: {data.city}</p>
          <p className="booking-detail">Size: {data.offerSize}</p>
          <p className="booking-detail">Parking Spot available:</p>
          <p className="booking-detail">From : {data.availableFrom}</p>
          <p className="booking-detail">Until : {data.availableUntil}</p>
          <p className="booking-detail">Total Price €:{data.price}</p>
          <p className="booking-detail">
            {" "}
            * Free cancellation up to 24 hours prior to arrival <br></br>
            <br></br>
          </p>{" "}
          <button className="book-button" onClick={handleBookSpot}>
            Book this spot
          </button>
        </div>
      </div>
      <footer className="footer">
        <Footer />
        {/* <p className="mb-0">Connect with us:</p>
      <p className="mt-3 mb-0">Created by Allessandra , Emma and Luis </p> */}
      </footer>
    </div>
  );
};

export default NewBooking;
