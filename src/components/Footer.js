import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="contact-info">
        <p>SpotSwap</p>
        {/* <p>Phone: (555) 555-5555</p> */}
        <p>Email: info@spotswap.com</p>
      </div>
      <div className="social-media">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
      <div className="credits">
        <p>Created by Alessandra, Emma, and Luis</p>
      </div>
      <p>&copy; {currentYear} SpotSwap. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
