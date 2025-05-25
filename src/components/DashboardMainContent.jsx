import React from 'react';
import '../styles/DashboardMainContent.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="top-section">
        <AnatomySection />
        <HealthStatusCards />
        <CalendarView />
      </div>
      <div className="bottom-section">
        <ActivityFeed />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
