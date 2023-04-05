import React from "react";
import Login from "../views/Login";
import Signup from "../views/Signup";

const LandingNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SpotSwap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                  <Login />
                  <Signup />
{/* 
              <a class="nav-link active" aria-current="page" href="/login">
                Login
              </a>
              <a class="nav-link" href="/signup">
                Sign Up
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
