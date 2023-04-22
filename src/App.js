import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Landingpage from "./views/Landing";
import Home from "./views/Home";
import Offers from "./routes/Offers";
import Register from "./routes/OfferRegistration";
import Payment from "./components/Payment";
import Bookings from "./routes/Bookings";
import Login from "./views/Login";
import Signup from "./views/Signup";
import LandingNavbar from "./components/LandingNavBar";
import MenuModal from "./components/MenuModal";
import Dashboard from "./views/Dashboard";
import OfferConfirmation from "./routes/OfferConfirmation";
import SeeMyBookings from "./routes/SeeMyBookings";
import PageNotFound from "./components/PageNotFound";
import Background from "../src/styles/logo1.png";
import BookingConfirmation from "./routes/BookingConfirmation";

function App() {
  const token = sessionStorage.getItem("jwt");
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route element={<Navbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/registeryouroffer" element={<Register />} />
          <Route path="/offerconfirmation" element={<OfferConfirmation />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/bookings/:id" element={<Bookings />} />
          <Route
            path="/bookingconfirmation"
            element={<BookingConfirmation />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/SeeMyBookings" element={<SeeMyBookings />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
