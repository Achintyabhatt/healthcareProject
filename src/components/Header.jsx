import React from 'react';
import '../styles/Header.css';
import { Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo"><span>Health</span>care.</h1>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <Bell className="icon" />
      </div>
      <div className="user-actions">
        <Plus className="icon plus-icon" />
        <img src="https://i.pravatar.cc/40" alt="User" className="user-avatar" />
      </div>
    </header>
  );
};

export default Header;
