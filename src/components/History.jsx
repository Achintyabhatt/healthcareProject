import React, { useState } from "react";
import { Clock, User, FileText, Calendar, Search, Filter } from "lucide-react";
import "../styles/History.css";

const History = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const historyData = [
    {
      id: 1,
      action: "Patient Record Updated",
      user: "Dr. Sarah Johnson",
      patient: "John Doe",
      timestamp: "2024-01-15 14:30:00",
      type: "Update",
      details: "Updated blood pressure readings and medication dosage",
    },
    {
      id: 2,
      action: "Appointment Scheduled",
      user: "Nurse Emily Davis",
      patient: "Michael Brown",
      timestamp: "2024-01-15 13:45:00",
      type: "Create",
      details: "Scheduled follow-up appointment for next week",
    },
    {
      id: 3,
      action: "Medical Report Generated",
      user: "Dr. Robert Wilson",
      patient: "Lisa Anderson",
      timestamp: "2024-01-15 12:20:00",
      type: "Generate",
      details: "Generated comprehensive medical report for insurance",
    },
    {
      id: 4,
      action: "Prescription Issued",
      user: "Dr. Sarah Johnson",
      patient: "Emily Davis",
      timestamp: "2024-01-15 11:15:00",
      type: "Create",
      details: "Issued prescription for asthma medication",
    },
    {
      id: 5,
      action: "Lab Results Uploaded",
      user: "Lab Technician",
      patient: "John Doe",
      timestamp: "2024-01-15 10:30:00",
      type: "Upload",
      details: "Uploaded blood test results to patient record",
    },
    {
      id: 6,
      action: "Patient Discharged",
      user: "Dr. Michael Brown",
      patient: "Robert Wilson",
      timestamp: "2024-01-15 09:45:00",
      type: "Update",
      details: "Completed discharge summary and follow-up instructions",
    },
    {
      id: 7,
      action: "Insurance Claim Filed",
      user: "Admin Staff",
      patient: "Sarah Johnson",
      timestamp: "2024-01-15 08:20:00",
      type: "Create",
      details: "Filed insurance claim for recent procedures",
    },
    {
      id: 8,
      action: "Medical Equipment Checked",
      user: "Maintenance Staff",
      patient: "N/A",
      timestamp: "2024-01-15 07:30:00",
      type: "Maintenance",
      details: "Routine maintenance check on MRI machine",
    },
  ];

  const filteredHistory = selectedFilter === "All" 
    ? historyData 
    : historyData.filter(item => item.type === selectedFilter);

  const getTypeColor = (type) => {
    switch (type) {
      case "Create": return "create";
      case "Update": return "update";
      case "Generate": return "generate";
      case "Upload": return "upload";
      case "Maintenance": return "maintenance";
      default: return "default";
    }
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <div className="header-content">
          <h1>Activity History</h1>
          <p>Track all system activities and user actions</p>
        </div>
      </div>

      <div className="history-controls">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search activities..."
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="activity-filter"
          >
            <option value="All">All Activities</option>
            <option value="Create">Create</option>
            <option value="Update">Update</option>
            <option value="Generate">Generate</option>
            <option value="Upload">Upload</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      <div className="history-stats">
        <div className="stat-card">
          <h3>Total Activities</h3>
          <p className="stat-number">{historyData.length}</p>
        </div>
        <div className="stat-card">
          <h3>Today's Activities</h3>
          <p className="stat-number">
            {historyData.filter(item => 
              item.timestamp.includes("2024-01-15")
            ).length}
          </p>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p className="stat-number">
            {new Set(historyData.map(item => item.user)).size}
          </p>
        </div>
      </div>

      <div className="history-timeline">
        {filteredHistory.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-marker">
              <div className={`marker ${getTypeColor(item.type)}`}>
                <Clock size={16} />
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{item.action}</h3>
                <span className={`type-badge ${getTypeColor(item.type)}`}>
                  {item.type}
                </span>
              </div>
              <div className="timeline-details">
                <div className="detail-row">
                  <span className="detail-label">User:</span>
                  <span className="detail-value">{item.user}</span>
                </div>
                {item.patient !== "N/A" && (
                  <div className="detail-row">
                    <span className="detail-label">Patient:</span>
                    <span className="detail-value">{item.patient}</span>
                  </div>
                )}
                <div className="detail-row">
                  <span className="detail-label">Time:</span>
                  <span className="detail-value">{item.timestamp}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Details:</span>
                  <span className="detail-value">{item.details}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History; 