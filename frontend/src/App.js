import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Services from './component/services/Services';
import About from './component/About/About';
import Contact from './component/contact/Contact';
import Addcarousel from './component/Add carosel/Addcarousel';
import Dashboard from './component/Dashboard/Dashboard';
import Appointments from './component/appointments/Appointment';
import AddGallery from './component/Add-Gallery/Gallery-backend';
import Ser from './component/Ser/Ser';
import Vedio from './component/Videos/Vedio';
import Clients from './component/Clients/Clients';
import Login from './component/Login/Login';
import CriminalPage from './component/criminal/Criminal';
import Litigation from './component/Litigation/Litigation';
import Corporate from './component/Corporate/Corporate';
import Intellectual from './component/Intellectual/Intellectual';
import Addclient from './component/Add client/Addclient';
import Ourteam from './component/our-team/Ourteam';
import Gallery from './component/Gallery/Gallery';
import TeamSection from './component/our-team/team-members/Ritu';
import Vikram from './component/our-team/team-members/Vikram';
import Aditya from './component/our-team/team-members/Aditya';
import Ritu from './component/our-team/team-members/Ritu';
import Anshika from './component/our-team/team-members/Anshika';

const App = () => {
  
  const [agreed, setAgreed] = useState(() => localStorage.getItem("userAgreed") === "true");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [expirationTime, setExpirationTime] = useState(
    parseInt(localStorage.getItem("expirationTime")) || null
  );

  const handleLogin = (newToken) => {
    const expiration = Date.now() + 120000; // 2 minutes expiration time
    localStorage.setItem("token", newToken);
    localStorage.setItem("expirationTime", expiration);
    setToken(newToken);
    setExpirationTime(expiration);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    setToken(null);
    setExpirationTime(null);
  
    // Redirect to login page
    window.location.href = "/login";
  };
 
  useEffect(() => {
    if (token && expirationTime) {
      const timeout = setTimeout(() => {
        handleLogout(); // Clear token when expired
      }, expirationTime - Date.now());

      return () => clearTimeout(timeout);
    }
  }, [token, expirationTime]);

  const handleAgree = () => {
    setAgreed(true);
    localStorage.setItem("userAgreed", "true");
  };

  if (!agreed) {
    return (
      <div className="disclaimer-overlay">
            <div className="disclaimer-container">
                <h1>Disclaimer</h1>
                <p>
                    In compliance with the rules of the Bar Council of India, this website of UMV Legal & Associates (the "Firm") is meant solely for information about the Firm, its practice areas, advocates and solicitors and not for the purpose of advertising, soliciting work or inducement of any sort by the Firm or any of its members. Nor is it to be construed as legal advice of any nature or manner whatsoever.<br/>
                    <br/>The content of this website is also the Intellectual Property of the Firm.<br/>
                    <br/>Please read and accept our website's Terms of Use and our Privacy Policy. By clicking on 'I AGREE' below, the website visitor acknowledges that the information provided in is meant only for his/her understanding of the Firm and its activities.
                </p>
                <button onClick={handleAgree} className="agree-button">I AGREE</button>
            </div>
        </div>
    );
  }

  const PrivateRoute = ({ element }) => {
    const isExpired = expirationTime && Date.now() > expirationTime;
    if (isExpired) {
      handleLogout(); // Clear token when expired
      return <Navigate to="/login" />;
    }
    return token ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <Router>
      
        {/* <Navbar  /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login setToken={handleLogin} />} />

          {/* Protected Routes */}
          <Route path="/addcourosel" element={<PrivateRoute element={<Addcarousel onLogout={handleLogout} />} />} />
          <Route path="/addgallery" element={<PrivateRoute element={<AddGallery onLogout={handleLogout}/>} />} />
          <Route path="/appointment" element={<PrivateRoute element={<Appointments  onLogout={handleLogout} />} />} />
          <Route path="/addclient" element={<PrivateRoute element={<Addclient  onLogout={handleLogout}/>} />} />

          {/* Other Routes */}
         
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/services" element={<Ser />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/vedio" element={<Vedio />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/criminal" element={<CriminalPage />} />
          <Route path="/litigation" element={<Litigation />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/intellectual" element={<Intellectual />} />
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/ritu" element={<Ritu/>} />
          <Route path="/aditya" element={<Aditya />} />
          <Route path="/vikram" element={<Vikram />} />
          <Route path="/anshika" element={<Anshika />} />


        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
};

export default App;
