import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
import "./styles/App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <Header />
        <DashboardMainContent activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;
