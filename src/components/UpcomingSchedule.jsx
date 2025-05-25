import React from 'react';
import '../styles/UpcomingSchedule.css';
import { appointments } from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2>Upcoming Appointments</h2>
      {appointments.map((appointment, index) => (
        <SimpleAppointmentCard key={index} appointment={appointment} />
      ))}
    </div>
  );
};

export default UpcomingSchedule;
