import React from 'react';
import '../styles/HealthStatusCards.css';
import { healthData } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <div key={index} className="health-card">
          <div className="card-header">
            <item.icon className="health-icon" />
            <span className="card-title">{item.title}</span>
          </div>
          <div className="card-value">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
