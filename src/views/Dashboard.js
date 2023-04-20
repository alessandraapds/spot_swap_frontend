import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from "../components/NavBar";
import useFetch from "../hooks/useFetch";

const Dashboard = () => {
  const name = sessionStorage.getItem("name");
  const api_url = process.env.REACT_APP_BACKEND_URL;
  const [offers, setOffers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(api_url + 'offers');
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await fetch(api_url + 'booking');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOffers();
    fetchBookings();
  }, []);

  const userId = sessionStorage.getItem("userId")
  const userOffers = offers.filter((offer) => offer.userId === userId );
  
  const bookedSpots = userOffers.filter((offer) => {
    const isBooked = bookings.some((booking) => booking.spot_id === offer._id);
    return isBooked;
  });

  const totalIncome = bookedSpots.reduce((total, offer) => {
    return total + offer.price;
  }, 0);

  return (
    <Container fluid>
      <Row>
        <Col className="Heading"><h1>Welcome to your dashboard {name}</h1></Col>
      </Row>
      <Row>
        <Col>
          <h2>My Listed Spots</h2>
          {offers.length === 0 ? (
            <p>Loading...</p>
          ) : (
            userOffers.map((offer) => (
              <Container key={offer._id}>
                <Row>
                  <Col className="listedSpots">
                    <div>
                      {offer.offerName} - {offer.street} - {offer.city}
                      <p>List Price: €{offer.price}</p>
                      {offer.isAvailable ? (
                        <p style={{fontWeight: 'bold', color:"red"}}>Available</p>
                      ) : (
                        <p style={{fontWeight: 'bold', color:"green"}}>Booked</p>
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
            ))
          )}
          <p>Total Earnings: €{totalIncome}</p>
        </Col>

        <Col>
          <h2>My Bookings</h2>
          {bookings.length === 0 ? (
            <p>Loading...</p>
          ) : (
            bookings
              .filter((booking) => booking.user_id === userId)
              .map((booking) => (
                <Container key={booking._id}>
                  <Row>
                    <Col className="bookedSpots">
                      <div>
                        <h6>Booking ID:{booking._id} </h6>
                        From: {booking.start_time}
                        <br />
                        To: {booking.end_time}
                        <br />
                        Cost: €{booking.total_cost}
                      </div>
                    </Col>
                  </Row>
                </Container>
              ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
