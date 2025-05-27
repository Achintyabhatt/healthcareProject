import React from "react";
import "../styles/PatientInfoCard.css";

const PatientInfoCard = ({ patient }) => {
  const { name, age, gender, patientId, contact, email, address } = patient;

  return (
    <div className="patient-info-card">
      <div className="patient-image">
        <img
          src={patient.image || "https://via.placeholder.com/80x100"}
          alt={patient.name}
        />
      </div>
      <div className="patient-details">
        <div className="patient-info">
          <strong className="patient-data">Name:</strong>
          <span className="patient-data">{name}</span>
        </div>
        <div className="patient-info">
          <strong className="patient-data">Age:</strong>
          <span className="patient-data">{age}</span>
        </div>
        <div className="patient-info">
          <strong className="patient-data">Gender:</strong>
          <span className="patient-data">{gender}</span>
        </div>
        <div className="patient-info">
          <strong className="patient-data">Patient ID:</strong>
          <span className="patient-data">{patientId}</span>
        </div>
        <div className="patient-info">
          <strong className="patient-data">Contact:</strong>
          <span className="patient-data">{contact}</span>
        </div>
        <div className="patient-info">
          <strong className="patient-data">Email:</strong>
          <span className="patient-data">{email}</span>
        </div>
        {/* <div className="patient-info full-width">
          <strong className="patient-data">Address:</strong>
          <span className="patient-data">{address}</span>
        </div> */}
      </div>
    </div>
  );
};

export default PatientInfoCard;
