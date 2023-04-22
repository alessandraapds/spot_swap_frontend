import React from "react";
import { Outlet,  NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <div>
       <nav>
          <ul className="navbar">
            <div className="navbar-links">
              <NavLink to='/home'>Home</NavLink>
              <NavLink to='/registeryouroffer'>Offer A Parking Spot</NavLink>
              <NavLink to='/SeeMyBookings'>See My Bookings</NavLink>
              <NavLink to='/dashboard'>My Dashboard</NavLink>
  
            </div>
          </ul>
        </nav>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          SpotSwap
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/home">
                Home
              </a>
              <a class="nav-link" href="registeryouroffer">
                Offer a parking spot
              </a>
              {/* <a class="nav-link" href="/offers">
                See all parkings spots
              </a> */}

              <a class="nav-link" href="/SeeMyBookings">
                See my Bookings
              </a>
              <a class="nav-link" href="/dashboard">
                My Dashboard
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
