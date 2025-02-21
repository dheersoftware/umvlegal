import React from 'react';
import './Team.css';
// import anshikaImage from '../../pics/10.jpg'; // Ensure the correct path to the image
import Footer from '../../Footer/Footer';
import NavBar from '../../Navbar/Navbar';

const Anshika = () => {
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
          <img src="https://png.pngtree.com/png-vector/20220523/ourmid/pngtree-female-employee-working-at-the-company-png-image_4719739.png" alt="Anshika Bhardwaj" className="profile-image" />
        </div>
        <div className="profile-content">
          <h2 className="profile-name">Anshika Bhardwaj</h2>
          <h3 className="profile-title">Patent Attorney</h3>
          <p className="profile-description">
            Anshika Bhardwaj is a skilled Patent Attorney with extensive expertise in intellectual
            property protection, patent prosecution, and innovation strategy. Her practice focuses on
            safeguarding the intellectual assets of businesses, inventors, and research organizations
            through meticulous legal and technical analysis.
          </p>
          <p className="profile-description">
            With a strong academic foundation in science and law, Anshika excels at bridging the gap
            between complex technical inventions and the legal frameworks required for their
            protection. Her experience spans a wide range of industries, including technology,
            pharmaceuticals, biotechnology, engineering, and more.
          </p>
          <h4 className="expertise-heading">Core Areas of Expertise</h4>
          <ul className="expertise-list">
            <li>
              <strong>Patent Drafting & Filing:</strong>
              <ul>
                <li>Comprehensive drafting of patent applications with precise technical and legal language.</li>
              </ul>
            </li>
            <li>
              <strong>Patent Prosecution:</strong>
              <ul>
                <li>Managing the patent application process, including responding to examination reports and objections.</li>
              </ul>
            </li>
            <li>
              <strong>Patent Searches:</strong>
              <ul>
                <li>Conducting prior art, freedom-to-operate (FTO), and novelty searches to assess patentability and market potential.</li>
              </ul>
            </li>
            <li>
              <strong>IP Portfolio Management:</strong>
              <ul>
                <li>Developing strategies for managing and maximizing the value of intellectual property portfolios.</li>
              </ul>
            </li>
            <li>
              <strong>Patent Litigation Support:</strong>
              <ul>
                <li>Assisting in disputes and infringement matters with robust legal and technical analysis.</li>
              </ul>
            </li>
            <li>
              <strong>Technology Licensing:</strong>
              <ul>
                <li>Drafting and negotiating licensing agreements to commercialize innovations.</li>
              </ul>
            </li>
            <li>
              <strong>Industrial Designs:</strong>
              <ul>
                <li>Filing and protecting designs to secure exclusive rights for innovative products.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <Footer/>
      </>
  );
};

export default Anshika;
