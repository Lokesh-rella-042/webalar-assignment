import React, { useState } from 'react';
import './../App.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
    axios.post('http://localhost:5000/api/login', {
      email,password
    })
      .then(response => {
        alert("Login successful!");
        console.log("User logged in:", response.data);
        // Store token in localStorage or handle it as needed
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      })
      .catch(error => {
        console.error("There was an error logging in!", error);
        alert("Login failed: " + (error.response?.data?.error || "Unknown error"));
      });
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Login Page</h1>
      <p className="register-description">
        Please enter your credentials to log into your account.
      </p>
      <form onSubmit={loginHandler} className="register-form">
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
        <button type="submit" className="form-button">Login</button>
      </form>
      <p className="login-link">
        Don’t have an account? <a href="/register">Register here</a>.
      </p>
    </div>
  );
};

export default Login;
