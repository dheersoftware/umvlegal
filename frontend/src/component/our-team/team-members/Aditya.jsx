import React from 'react';
import './Team.css';
import aditya from '../../pics/aditya.jpg'; // Ensure the correct path to the image
import NavBar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const Aditya = () => {
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
          <img src={aditya} alt="Aditya Singh" className="profile-image" />
        </div>
        <div className="profile-content">
          <h2 className="profile-name">Aditya Singh</h2>
          <h3 className="profile-title">Founder, UMV Legal &amp; Associates</h3>
          <p className="profile-description">
          Aditya Singh is the driving force behind UMV Legal &amp; Associates, bringing years of
specialized expertise in Intellectual Property (IP) matters and various other legal domains.
With a rich professional background that includes working with top-tier law firms in Mumbai
and Delhi, he has successfully handled a diverse clientele from India and abroad.
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
              <strong>Intellectual Property Portfolio Management:</strong>
              <ul>
                <li>Advising on brand adoption,
                protection, and enforcement.</li>
               
              </ul>
            </li>
            <li>
              <strong>Trademark Law:</strong>
              <ul>
                <li>Extensive experience in prosecution, oppositions, infringement,
and brand protection strategies, with filings in the <strong>UK, USA, European Union, and
Australia.</strong></li>
               
              </ul>
            </li>
            <li>
              <strong>Copyright Law:</strong>
              <ul>
                <li>Offering specialized opinions and resolving disputes.</li>
               
              </ul>
            </li>
            <li>
              <strong>International IP Filings:</strong>
              <ul>
                <li>Proficiency in filing trademarks, patents, and copyrights for
                clients worldwide.</li>
                
              </ul>
            </li>
            <li>
              <strong>Contracts &amp; Agreements:</strong>
              <ul>
                <li>Drafting and negotiating contracts, assignments, and
                deeds.</li>
                
              </ul>
            </li>
            <li>
              <strong>Dispute Resolution:</strong>
              <ul>
                <li>Addressing disputes related to Intellectual Property and
                commercial matters.</li>
                
              </ul>
            </li>
            <li>
              <strong>Additional Expertise:</strong>
              <ul>
                <li>Handling cases related to <strong>Family Law, NCLT, DRT, </strong>and <strong>Arbitration</strong> with precision
                and professionalism.</li>
                <br/>
                <li>Aditya Singh is committed to delivering tailored legal solutions that align with the unique
needs of his clients, ensuring excellence in every aspect of his practice.<br/>
At UMV Legal &amp; Associates, his vision is to provide comprehensive legal guidance and
unparalleled service in the dynamic field of law, with a particular focus on Intellectual
Property Rights.</li>
                
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

export default Aditya;
