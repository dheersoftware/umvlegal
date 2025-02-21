import React from 'react';
import './Team.css';
import rituImage from '../../pics/ca-ritugupta.jpg'; // Ensure the correct path to the image
import NavBar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const TeamProfile = () => {
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
          <img src={rituImage} alt="CA Ritu Gupta" className="profile-image" />
        </div>
        <div className="profile-content">
          <h2 className="profile-name">CA Ritu Gupta</h2>
          <h3 className="profile-title">Experienced Chartered Accountant & Financial Advisor</h3>
          <p className="profile-description">
            CA Ritu Gupta is a seasoned Chartered Accountant with extensive experience in finance,
            taxation, and business advisory services. Her expertise lies in providing comprehensive
            financial solutions tailored to meet the unique needs of individuals and businesses across
            various industries.
          </p>
          <p className="profile-description">
            With a strong foundation in tax planning, compliance, and corporate financial management,
            Ritu has earned a reputation for her meticulous attention to detail and strategic approach.
            Her commitment to delivering exceptional client service makes her a trusted advisor for
            navigating complex financial landscapes.
          </p>
          <h4 className="expertise-heading">Core Areas of Expertise</h4>
          <ul className="expertise-list">
            <li>
              <strong>Taxation Services:</strong>
              <ul>
                <li>Income tax filing and planning for individuals and businesses</li>
                <li>GST compliance, filing, and advisory</li>
                <li>Tax audits and representation before tax authorities</li>
              </ul>
            </li>
            <li>
              <strong>Corporate Advisory:</strong>
              <ul>
                <li>Business setup and entity structuring</li>
                <li>Financial planning and budgeting</li>
                <li>Compliance with corporate laws and regulations</li>
              </ul>
            </li>
            <li>
              <strong>Accounting & Audit Services:</strong>
              <ul>
                <li>Preparation and review of financial statements</li>
                <li>Internal and statutory audits</li>
                <li>Management of payroll and bookkeeping</li>
              </ul>
            </li>
            <li>
              <strong>Financial Advisory:</strong>
              <ul>
                <li>Investment planning and portfolio management</li>
                <li>Advisory on mergers, acquisitions, and restructuring</li>
                <li>Loan syndication and fund-raising strategies</li>
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

export default TeamProfile;
