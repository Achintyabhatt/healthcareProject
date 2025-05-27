import React from "react";
import "../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ appointment }) => {
  console.log("appointment >>", appointment);
  return (
    <>
      <p style={{ marginTop: "5px", marginBottom: "5px", color: "grey" }}>
        {appointment.day}
      </p>
      <div className="appointment-card">
        <div className="appointment-info">
          <p style={{ color: "#1e3a8a", fontWeight: 600 }}>
            {appointment?.title}
          </p>
          <p>
            {appointment?.start_time} - {appointment?.end_time}
          </p>
        </div>
        <button className="view-btn">View</button>
      </div>
    </>
  );
};

export default SimpleAppointmentCard;
