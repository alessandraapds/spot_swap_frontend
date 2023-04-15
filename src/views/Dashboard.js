import React, { useState } from 'react'
import Navbar from "../components/NavBar";
import useFetch from "../hooks/useFetch";
import { Col, Container, Row } from 'react-bootstrap';

const Dashboard = () => {
const name = sessionStorage.getItem("name");
const api_url = process.env.REACT_APP_BACKEND_URL;
const { data, isLoading, error } = useFetch(api_url + 'offers');
const { data: booking, isLoading: isLoadingBooking, error: errorBooking } = useFetch(api_url + 'booking')
const userId = sessionStorage.getItem("userId")
const bookings = booking.filter((booking) => booking.user_id === userId);
const offers = data.filter((offer) => offer.user_id === userId );
const bookedSpots = []
for (let i =0; i< data.length; i++) { 
if (data[i].isAvailable === false) {
  bookedSpots.push(data[i])
  console.log(bookedSpots)
}}
let totalIncome = 0;
for (let i = 0; i < bookedSpots.length; i++){
  totalIncome += bookedSpots[i].price;
}
console.log(totalIncome, 'income')
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
                  <Col className="listedSpots">
                  <div>{offer.offerName} - {offer.street} - {offer.city}

                  <p>List Price: €{offer.price}</p>
                  {offer.isAvailable === true ? <p style={{fontWeight: 'bold', color:"red"}}>Available</p>: <p style={{fontWeight: 'bold', color:"green"}}>Booked</p>}
                  </div>
                  </Col>
                  
                </Row>
                
            </Container>
          );
        })
      )}
      <p> Total Earnings: €{totalIncome}</p>
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
                  <Col className='bookedSpots'>
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