import React from "react";
import "../styles/DashboardMainContent.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import Reports from "./Reports";
import Documents from "./Documents";
import Resources from "./Resources";
import Patients from "./Patients";
import History from "./History";
import Support from "./Support";

const DashboardMainContent = ({ activeTab }) => {
  // Render different components based on activeTab
  switch (activeTab) {
    case "Reports":
      return <Reports />;
    case "Documents":
      return <Documents />;
    case "Resources":
      return <Resources />;
    case "Patients":
      return <Patients />;
    case "History":
      return <History />;
    case "Support":
      return <Support />;
    default:
      // Default dashboard view
      return (
        <div className="dashboard-main-content">
          <div className="top-section">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <div className="bottom-section">
            <ActivityFeed />
            <UpcomingSchedule />
          </div>
        </div>
      );
  }
};

export default DashboardMainContent;
