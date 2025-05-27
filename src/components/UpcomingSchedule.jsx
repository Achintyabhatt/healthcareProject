import React from "react";
import "../styles/UpcomingSchedule.css";
import { appointments } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  const itemCount = appointments.length;
  const getCardWidth = () => {
    if (itemCount === 1) return "100%";
    if (itemCount === 2) return "48%";
    return "32%"; // 3 in a row with spacing
  };

  return (
    <div className="upcoming-schedule">
      <h2>Upcoming Appointments</h2>
      <div className="schedule-list">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="schedule-card-wrapper"
            style={{ width: getCardWidth() }}
          >
            <SimpleAppointmentCard appointment={appointment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
