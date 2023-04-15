import React from 'react'
import Navbar from "../components/NavBar";
import useFetch from "../hooks/useFetch";
import { Col, Container, Row } from 'react-bootstrap';
import MenuModal from '../components/MenuModal';

const Dashboard = () => {
const name = sessionStorage.getItem("name");
const api_url = process.env.REACT_APP_BACKEND_URL;
const { data, isLoading, error } = useFetch(api_url + 'offers');
const { data: booking, isLoading: isLoadingBooking, error: errorBooking } = useFetch(api_url + 'booking')
const userId = sessionStorage.getItem("userId")
const bookings = booking.filter((booking) => booking.user_id === userId);

  return (
    <Container fluid>
        <Row>
            <Col className="Heading"><h1>Welcome to your dashboard {name}</h1></Col>
        </Row>
        <Row>
            <Col><h2>My Listed Spots</h2>
           {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((offer) => {
          return (
            <Container>
                <Row>
                  <Col>
                  <li>{offer.offerName} - {offer.street} - {offer.city}</li>
                  </Col>
                </Row>
            </Container>
          );
        })
      )}
            </Col>

            <Col><h2>My Bookings</h2>
           
            {isLoadingBooking ? (
        <p>Loading...</p>
      ) :    
      (
        bookings.map((booking) => { 

          return (
            <Container>
                <Row>
                  <Col>
                   <div>
                    <h6>Booking ID:{booking._id} </h6>
                  
                   From: {booking.start_time}
                   <br />
                   To: {booking.end_time}
                   </div>
                  </Col>
                </Row>
            </Container>
          );
        })
      )}
       </Col>
        </Row>
        
    </Container>
  )
}

export default Dashboard