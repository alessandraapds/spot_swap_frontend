import React from "react";
import LandingNavbar from "../components/LandingNavBar";
import Form from "../components/Form";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "../components/Footer";

const Landingpage = () => {
  return (
    
    <div>
      <div className="container text-center py-4">
        <div className="row mt-4">
          <div className="welcome">
            <h1>Welcome to SpotSwap</h1>
            <h6 className="slogan">"Swap your spot. Unlock your city"</h6>
            <br>
            </br>
            <p className="my-paragraph">
            SpotSwap is a platform that connects people who have unused parking spaces with people who need a place to park. It allows individuals who have an extra parking spot or unused driveway to rent them out to others in their area who need a place to park their car. This is especially helpful in crowded cities where parking is limited or expensive, and can provide a convenient and affordable solution for people who need a place to park. By using SpotSwap, people can earn extra income by renting out their unused parking spaces, while others can find a convenient and affordable parking spot.
            </p>
            <p className="my-paragraph">
              Our platform is easy to use, and our customer support team is
              always available to answer any questions you might have. So why
              wait? Sign up today and start parking with SpotSwap!
            </p>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <button className="btn btn-primary btn-lg me-5"><Signup /></button>
              <button className="btn btn-secondary btn-lg"><Login /></button>
            </div>
            <br />
            <br />
            <h3 className=" title2">"Find parking near your favorite cities with SpotSwap!"</h3>
          </div>
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="images/dortmund.jpeg"
                  alt="streets of Dortmund"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title"> Dortmund</h5>
                  <p className="card-text">
                    "Echte Liebe" meaning "True Love".
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="images/duesseldorf.jpeg"
                  alt="streets of Dortmund"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Duesseldorf</h5>
                  <p className="card-text">
                    "Nähe trifft Freiheit" meaning “Live close feel free”.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="images/munich.jpeg"
                  alt="streets of Dortmund"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Munich</h5>
                  <p className="card-text">
                    {" "}
                    "München mag dich" meaning "Munich loves you"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
      <Footer/>
        {/* <p className="mb-0">Connect with us:</p>
      <p className="mt-3 mb-0">Created by Allessandra , Emma and Luis </p> */}
      </footer>
    </div>
  );
  
};

export default Landingpage;
