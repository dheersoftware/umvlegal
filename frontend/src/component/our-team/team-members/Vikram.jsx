import React from 'react';
import './Team.css';
import vikramImage from '../../pics/vikram-umvlegal.jpg'; // Ensure the correct path to the image
import Footer from '../../Footer/Footer';
import NavBar from '../../Navbar/Navbar';

export default function Vikram() {
    return (
        <>
        <NavBar/>
        <div className="team-profile-container">
          <h1 className="team-heading">Meet Our Expert Team</h1>
          <p className="team-description">
            Our team consists of highly skilled professionals dedicated to delivering excellence in their respective fields.
          </p>
          <div className="profile-card">
            <div className="profile-image-container">
              <img src={vikramImage} alt="Adv. Vikram Gulliya" className="profile-image" />
            </div>
            <div className="profile-content">
              <h2 className="profile-name">Adv. Vikram Gulliya</h2>
              <h3 className="profile-title">Litigation Partner, Delhi</h3>
              <h4 className="profile-subtitle">Expert Advocate for Comprehensive Legal Solutions</h4>
              <p className="profile-description">
                Advocate Vikram Gulliya is a distinguished legal professional with extensive expertise in litigation, legal advisory, and dispute resolution. Based in Delhi, he specializes in representing clients across a broad spectrum of legal domains, ensuring robust advocacy and strategic solutions tailored to each client's unique needs.
              </p>
              <p className="profile-description">
                With years of hands-on experience, Vikram has successfully handled complex cases in High Courts, District Courts, Consumer Forums, National Company Law Tribunal (NCLT), and Arbitral Tribunals. His proficiency in both civil and criminal matters, coupled with a client-first approach, has made him a trusted name in the legal fraternity.
              </p>
              <h4 className="expertise-heading">Areas of Expertise</h4>
              <ul className="expertise-list">
                <li>
                  <strong>Civil Litigation:</strong>
                  <ul>
                    <li>Property disputes, contractual disagreements, recovery suits, and injunction matters.</li>
                  </ul>
                </li>
                <li>
                  <strong>Criminal Defense:</strong>
                  <ul>
                    <li>Representation in criminal trials, bail matters, and white-collar crime cases.</li>
                  </ul>
                </li>
                <li>
                  <strong>Consumer Dispute Resolution:</strong>
                  <ul>
                    <li>Advocacy in consumer forums for grievances related to defective products or services.</li>
                  </ul>
                </li>
                <li>
                  <strong>Corporate and Commercial Disputes:</strong>
                  <ul>
                    <li>Handling company law matters, shareholder disputes, and insolvency cases under the IBC.</li>
                  </ul>
                </li>
                <li>
                  <strong>Alternative Dispute Resolution (ADR):</strong>
                  <ul>
                    <li>Skilled in arbitration, mediation, and conciliation for efficient dispute resolution.</li>
                  </ul>
                </li>
                <li>
                  <strong>Matrimonial Law:</strong>
                  <ul>
                    <li>Expertise in divorce, maintenance, alimony, and domestic violence cases.</li>
                  </ul>
                </li>
                <li>
                  <strong>Contract Management:</strong>
                  <ul>
                    <li>Drafting, reviewing, and negotiating contracts with a focus on risk mitigation.</li>
                  </ul>
                </li>
                <li>
                  <strong>RERA Matters:</strong>
                  <ul>
                    <li>Advising on real estate disputes and representation before RERA Authorities.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
        </>
      );
    
}
