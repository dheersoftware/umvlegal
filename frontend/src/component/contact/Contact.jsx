import React, { useRef, useEffect, useState } from 'react';
import "./contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';
import { color } from 'framer-motion';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};
// Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations after 100px scroll
      once: true, // Animation should happen only once
    });
  }, []);
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Appointment submitted successfully!');
        } else {
            alert('Failed to submit appointment.');
        }
    } catch (error) {
        console.error('Error submitting appointment:', error);
        alert('An error occurred while submitting your appointment.');
    }
};
  return (
    <>
     <NavBar/>
   {/* appointment */}
   <section>
            <div id="headings-aboutus">
                <h2>CONTACT US</h2>
            </div>
            <div
                className="appointment-container"
                style={{
                    backgroundImage: `url('https://www.shutterstock.com/image-photo/legal-scales-judge-gavel-justice-600nw-2293288299.jpg')`,
                }}
            >
                <div className="appointment-form" data-aos="fade-up">
                    <h2>Get An Appointment</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <div className="date-time">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                          
                        </div>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select A Service</option>
                            <option value="consultation">Consultation</option>
                            <option value="legal-advice">Legal Advice</option>
                            <option value="documentation">Documentation</option>
                            <option value="consultation">Patents</option>
                            <option value="legal-advice">Trademarks</option>
                            <option value="documentation">Copyrights</option>
                            <option value="consultation">Trade Secrets</option>
                            <option value="legal-advice">IP Litigation</option>
                            <option value="documentation">Licensing and Transactions</option>
                            <option value="consultation">IP Portfolio Management</option>
                            <option value="legal-advice">Company Incorporation</option>
                        </select>
                        <a href='/contact'><button type="submit">Get An Appointment</button></a>
                    </form>
                </div>
            </div>
        </section>
         
   <div className="home-emergencycase-container">
      <section className="home-emergencycase-container-emergency-section" data-aos="fade-right">
        <h2>Emergency Cases ?</h2>
        <p>Contact for Quick Legal Assistance :</p>
        <p className="phone">Call Us Now</p>
        <a href="tel:+919967276861"><p>
         +91 9967276861  </p></a>
      </section>
      <section className="home-emergencycase-container-help-section" data-aos="fade-up">
        <h2>Need Legal Help?</h2>
        <p>
          Fix an Appointment for Advice / Guidance / Assistance on any Legal
          Matter :
        </p>
        <button className="home-emergencycase-container-appointment-button">
          FIX AN APPOINTMENT
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
        </button>
      </section>
      <section className="home-emergencycase-container-hours-section" data-aos="fade-left">
        <h2>Working Hours</h2>
          <div className="working-day">
              <p>Monday - Friday</p>
              <p>10.00 am- 09.00 pm</p>
          </div>
          <div className="working-day">
              <p>Saturday</p>
              <p>11.00 am- 06.00 pm</p>
          </div>
          <div className="working-day">
              <p>Sunday</p>
              <p>Closed</p>
          </div>
      </section>
    </div>
<Footer/>
    </>
  )
}
