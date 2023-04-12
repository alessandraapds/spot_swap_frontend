import React from 'react'
import Navbar from "../components/NavBar";
import { Col, Container, Row } from 'react-bootstrap';

const Dashboard = () => {
const name = sessionStorage.getItem("name");

  return (
    <Container>
        <Row>
            <Col className="Heading"><h1>Welcome to your dashboard {name}</h1></Col>
        </Row>
        <Row>
            <Col><h2>My Listed Spots</h2></Col>
            <Col><h2>My Bookings</h2></Col>
        </Row>
        
    </Container>
  )
}

export default Dashboard