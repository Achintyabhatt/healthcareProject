import React from "react";
import "../styles/Header.css";
import { Bell, Plus, Search } from "lucide-react";
import AvatarImg from "../assets/avatar.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <Search className="search-icon" color="#1e3a8a" />
        <input type="text" placeholder="Search.." />
        <Bell className="bell-icon" color="#1e3a8a" />
      </div>
      <div className="user-actions">
        <Plus className="plus-icon" color="#1e3a8a" />
        <img src={AvatarImg} alt="User" className="user-avatar" />
      </div>
    </header>
  );
};

export default Header;
