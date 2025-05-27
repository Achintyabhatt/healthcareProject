// src/components/Sidebar.jsx
import React from "react";
import "../styles/Sidebar.css";
import { navLinks } from "../data/navigation";
import HealthCareLogo from "../assets/healthcare.webp";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      <div className="health-logo">
        <img
          src={HealthCareLogo}
          alt="Anatomical Diagram"
          className="healthcare-image"
        />
        <p className="health-title">
          <span style={{ color: "white" }}>Health</span>
          <span style={{ fontWeight: "500" }}>Care</span>
        </p>
      </div>
      <div className="sidebar-section">
        <p className="section-title">General</p>
        {navLinks.general.map((item, index) => (
          <div
            key={index}
            className={`sidebar-link ${
              activeTab === item.name ? "active" : ""
            }`}
            onClick={() => setActiveTab(item.name)}
          >
            <item.icon className="sidebar-icon" />
            <span className="sidebar-text">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-section">
        <p className="section-title">Tools</p>
        {navLinks.tools.map((item, index) => (
          <div
            key={index}
            className={`sidebar-link ${
              activeTab === item.name ? "active" : ""
            }`}
            onClick={() => setActiveTab(item.name)}
          >
            <item.icon className="sidebar-icon" />
            <span className="sidebar-text">{item.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
