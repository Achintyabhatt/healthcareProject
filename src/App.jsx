import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import './styles/global.css';

const App = () => (
  <div className="app-layout">
    <Sidebar />
    <div className="main-section">
      <Header />
      <DashboardMainContent />
    </div>
  </div>
);

export default App;