import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using React Router
import "./footer.css";
import { color } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a trusted law firm dedicated to providing comprehensive legal services with integrity and professionalism.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
  <h3>Contact Us</h3>
  <p>🏣 Shreeram Building Mahamandir, Jodhpur</p>
  <a href="tel:+919967276861"><p>
    ☎️ Phone: +91 9967276861  </p></a>

  <a href="mailto:umvlegalassosiate@gmail.com"><p>
    📩 Email: umvlegalassosiate@gmail.com </p></a>
 
</div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UMV Legal & Associates. All rights reserved.</p>
        <a href='https://dheersoftwaresolutions.com/' target='blank' >  <p>Designed & Developed By: Dheer Software Solutions </p></a>
      </div>
    </footer>
  );
}

export default Footer;
