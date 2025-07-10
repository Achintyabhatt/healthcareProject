import React, { useState } from "react";
import { User, Search, Filter, Plus, Phone, Mail, Calendar } from "lucide-react";
import "../styles/Patients.css";

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      phone: "+1 (555) 123-4567",
      email: "john.doe@email.com",
      status: "Active",
      lastVisit: "2024-01-15",
      nextAppointment: "2024-01-25",
      condition: "Hypertension",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 32,
      gender: "Female",
      phone: "+1 (555) 234-5678",
      email: "sarah.johnson@email.com",
      status: "Active",
      lastVisit: "2024-01-14",
      nextAppointment: "2024-01-22",
      condition: "Diabetes",
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 58,
      gender: "Male",
      phone: "+1 (555) 345-6789",
      email: "michael.brown@email.com",
      status: "Inactive",
      lastVisit: "2023-12-20",
      nextAppointment: null,
      condition: "Heart Disease",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 28,
      gender: "Female",
      phone: "+1 (555) 456-7890",
      email: "emily.davis@email.com",
      status: "Active",
      lastVisit: "2024-01-13",
      nextAppointment: "2024-01-28",
      condition: "Asthma",
    },
    {
      id: 5,
      name: "Robert Wilson",
      age: 67,
      gender: "Male",
      phone: "+1 (555) 567-8901",
      email: "robert.wilson@email.com",
      status: "Active",
      lastVisit: "2024-01-12",
      nextAppointment: "2024-01-30",
      condition: "Arthritis",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      age: 41,
      gender: "Female",
      phone: "+1 (555) 678-9012",
      email: "lisa.anderson@email.com",
      status: "Active",
      lastVisit: "2024-01-11",
      nextAppointment: "2024-01-26",
      condition: "Migraine",
    },
  ];

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || patient.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="patients-container">
      <div className="patients-header">
        <div className="header-content">
          <h1>Patients</h1>
          <p>Manage patient information and medical records</p>
        </div>
        <button className="add-patient-btn">
          <Plus size={20} />
          Add Patient
        </button>
      </div>

      <div className="patients-controls">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search patients by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="status-filter"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="patients-stats">
        <div className="stat-card">
          <h3>Total Patients</h3>
          <p className="stat-number">{patients.length}</p>
        </div>
        <div className="stat-card">
          <h3>Active Patients</h3>
          <p className="stat-number">
            {patients.filter((p) => p.status === "Active").length}
          </p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Appointments</h3>
          <p className="stat-number">
            {patients.filter((p) => p.nextAppointment).length}
          </p>
        </div>
      </div>

      <div className="patients-grid">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="patient-card">
            <div className="patient-header">
              <div className="patient-avatar">
                <User size={24} />
              </div>
              <div className="patient-info">
                <h3>{patient.name}</h3>
                <p className="patient-details">
                  {patient.age} years • {patient.gender}
                </p>
                <span className={`status-badge ${patient.status.toLowerCase()}`}>
                  {patient.status}
                </span>
              </div>
            </div>
            
            <div className="patient-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>{patient.phone}</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>{patient.email}</span>
              </div>
            </div>

            <div className="patient-medical">
              <div className="medical-item">
                <strong>Condition:</strong> {patient.condition}
              </div>
              <div className="medical-item">
                <strong>Last Visit:</strong> {patient.lastVisit}
              </div>
              {patient.nextAppointment && (
                <div className="medical-item">
                  <strong>Next Appointment:</strong> {patient.nextAppointment}
                </div>
              )}
            </div>

            <div className="patient-actions">
              <button className="action-btn" title="View Details">
                View
              </button>
              <button className="action-btn" title="Edit Patient">
                Edit
              </button>
              <button className="action-btn" title="Schedule Appointment">
                Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients; 