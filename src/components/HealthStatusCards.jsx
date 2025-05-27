import React from "react";
import "../styles/HealthStatusCards.css";
import { healthData } from "../data/healthData";
import CalendarView from "./CalendarView";
import PatientInfoCard from "./PatientInfoCard";

const patient = {
  name: "Asterial Pandat",
  age: 25,
  gender: "Male",
  patientId: "P15411",
  contact: "+917408689905",
  email: "achintya@gmail.com",
  address: "KPIT Office,Pune India",
  image: "https://randomuser.me/api/portraits/men/75.jpg",
};

const HealthStatusCards = () => {
  return (
    <div className="health-and-patient-wrapper">
      {/* Left: Health section */}
      <div className="health">
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
        <CalendarView />
      </div>

      {/* Right: Patient info */}
      <div className="patient-card-as-health">
        <PatientInfoCard patient={patient} />
      </div>
    </div>
  );
};

export default HealthStatusCards;
