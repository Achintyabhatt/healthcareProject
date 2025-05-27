import React from "react";
import "../styles/ActivityFeed.css";

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h2>Recent Activities</h2>
      <ul>
        <li>✅ Checked patient vitals - John Doe</li>
        <li>📅 Scheduled MRI for Jane Smith</li>
        <li>💊 Prescribed medication for Brian Lee</li>
        <li>🚶‍♂️ Logged 5,000 steps for Liam Walker</li>
        <li>💉 Administered flu vaccine to Noah Davis</li>
      </ul>
    </div>
  );
};

export default ActivityFeed;
