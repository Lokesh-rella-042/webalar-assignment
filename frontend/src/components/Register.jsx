import React, { useState } from 'react';
import './../App.css';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registrationHandler = (e) => {
  e.preventDefault();
  if (!name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  axios.post('http://localhost:5000/api/register', {
    name,
    email,
    password,
    confirmPassword: password
  })
    .then(response => {
      alert("Registration successful!");
      console.log("User registered:", response.data);
      window.location.href = '/login';
    })
    .catch(error => {
      console.error("There was an error registering the user!", error);
      alert("Registration failed: " + (error.response?.data?.error || "Unknown error"));
    });
}


  return (
    <div className="register-container">
      <h1 className="register-title">Register Page</h1>
      <p className="register-description">
        Welcome to the registration page. Please fill out the form below to create an account.
      </p>
      <form onSubmit={registrationHandler} className="register-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="username"
            required
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="conformationpassword" className="form-label">conformation Password:</label>
          <input
            type="password"
            id="conformtionpassword"
            name="conformationpassword"
            required
            className="form-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="form-button">Register</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </div>
  );
};

export default Register;
