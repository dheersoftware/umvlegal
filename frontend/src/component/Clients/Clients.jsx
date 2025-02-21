import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './clients.css';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch clients data from the server
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/client-images');
        setClients(response.data); // Assuming your server returns an array of client data
      } catch (error) {
        console.error('Error fetching client data:', error);
      }
    };

    fetchClients();
  }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <>
    <NavBar/>
      <section className="hero">
        <div className="hero-text">
          <span>Our Clients</span>
          <h2>We help our clients achieve the best legal outcomes</h2>
          <p>
            With our team of dedicated legal professionals, we're here to guide you through every legal challenge, ensuring that you always have a trusted partner by your side.
          </p>
        </div>
      </section>
      <section className="section-title">
        <h2>Our Success Stories</h2>
        <p>Here are some of our successful cases for our valued clients.</p>
      </section>

      <section className="clients">
        <div className="clients-grid">
          {clients.length > 0 ? (
            clients.map((client) => (
              <div className="client-card" key={client._id}>
                <img
                  src={`http://localhost:5000${client.path}`} // Assuming client.image path from the server response
                  alt={client.heading}
                />
                <div className="client-card-content">
                  <h3>{client.heading}</h3>
                  <p>{client.paragraph}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No clients found</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
