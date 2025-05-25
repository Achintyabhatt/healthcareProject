import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-info">
        <h4>{appointment.patient}</h4>
        <p>{appointment.date} • {appointment.time}</p>
      </div>
      <button className="view-btn">View</button>
    </div>
  );
};

export default SimpleAppointmentCard;
