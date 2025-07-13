import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Optional for styling

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/" className="go-home">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
