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
const offers = data.filter((offer) => offer.userId === userId );
// console.log(offers, 'offers')
//check whether spot is booked or not
const bookedSpots = []
for (let i = 0; i < offers.length; i++) {
  for (let j = 0; j < booking.length; j++) {
    if (offers[i]._id === booking[j].spot_id) {
      bookedSpots.push(offers[i]);
    }
  }
}
  // const idToCheck = bookedSpots._id;
  //   const inArray = idToCheck.some(id => bookedSpots.some(booking => booking.id === id))

console.log(offers, 'offers')
console.log(bookedSpots, 'booked')



// calculate income from spots
let totalIncome = 0;
for (let i = 0; i < bookedSpots.length; i++){
  totalIncome += bookedSpots[i].price;
}

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
        offers.map((offer) => {
          const isBooked = offers.map(offer => bookedSpots.some(booking => booking._id === offer._id))
          console.log(isBooked)
          return (
            <Container>
                <Row>
                  <Col className="listedSpots">
                  <div>{offer.offerName} - {offer.street} - {offer.city}

                  <p>List Price: €{offer.price}</p>
                  {isBooked ? (<p style={{fontWeight: 'bold', color:"red"}}>Available</p>): (<p style={{fontWeight: 'bold', color:"green"}}>Booked</p>)}
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