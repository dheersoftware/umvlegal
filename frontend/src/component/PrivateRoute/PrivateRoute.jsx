// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

// PrivateRoute component that checks authentication
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const expirationTime = parseInt(localStorage.getItem('expirationTime'));

  // Check if the token is expired
  const isExpired = expirationTime && Date.now() > expirationTime;

  // If token is expired or doesn't exist, redirect to login page
  if (!token || isExpired) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return <Navigate to="/login" />;
  }

  // Return the protected component if the user is authenticated
  return element;
};

export default PrivateRoute;
