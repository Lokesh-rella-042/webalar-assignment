import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

const Features = () => {
  const featuresList = [
    {
      icon: '📝',
      title: 'Task Management',
      description: 'Create, edit, and track tasks across different stages with ease.'
    },
    {
      icon: '👥',
      title: 'User Collaboration',
      description: 'Assign tasks to users and maintain accountability within teams.'
    },
    {
      icon: '📊',
      title: 'Progress Analytics',
      description: 'Visualize progress across Todo, In Progress, and Done boards.'
    },
    {
      icon: '🔐',
      title: 'Secure Auth',
      description: 'Login and registration protected with hashed passwords and JWT tokens.'
    },
    {
      icon: '⚡',
      title: 'Fast API',
      description: 'Built on Express.js and MongoDB for speed and reliability.'
    },
    {
      icon: '📱',
      title: 'Responsive UI',
      description: 'Works seamlessly on desktop and mobile devices.'
    }
  ];

  return (
    <div className="features-page">
      <Navbar />
      <div className="features-container">
        <h1>🚀 Features</h1>
        <p className="subtitle">Discover what makes our app powerful and user-friendly.</p>
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
