// src/components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css';
import { navLinks } from '../data/navigation';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <p className="section-title">General</p>
        {navLinks.general.map((item, index) => (
          <div
            key={index}
            className={`sidebar-link ${item.name === 'Dashboard' ? 'active' : ''}`}
          >
            <item.icon className="sidebar-icon" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-section">
        <p className="section-title">Tools</p>
        {navLinks.tools.map((item, index) => (
          <div key={index} className="sidebar-link">
            <item.icon className="sidebar-icon" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
