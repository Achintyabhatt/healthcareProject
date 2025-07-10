import React from "react";
import { BarChart3, TrendingUp, FileText, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import "../styles/Reports.css";

const patientStatsData = [
  { month: "Jan", patients: 210 },
  { month: "Feb", patients: 250 },
  { month: "Mar", patients: 300 },
  { month: "Apr", patients: 280 },
  { month: "May", patients: 320 },
  { month: "Jun", patients: 350 },
  { month: "Jul", patients: 400 },
  { month: "Aug", patients: 370 },
  { month: "Sep", patients: 390 },
  { month: "Oct", patients: 420 },
  { month: "Nov", patients: 410 },
  { month: "Dec", patients: 430 },
];

const revenueTrendsData = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4000 },
  { month: "Mar", revenue: 4200 },
  { month: "Apr", revenue: 3900 },
  { month: "May", revenue: 4500 },
  { month: "Jun", revenue: 4700 },
  { month: "Jul", revenue: 5000 },
  { month: "Aug", revenue: 4800 },
  { month: "Sep", revenue: 5100 },
  { month: "Oct", revenue: 5300 },
  { month: "Nov", revenue: 5200 },
  { month: "Dec", revenue: 5500 },
];

const Reports = () => {
  const reportData = [
    {
      id: 1,
      title: "Patient Analytics",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: BarChart3,
    },
    {
      id: 2,
      title: "Revenue Report",
      value: "$45,231",
      change: "+8.2%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "Medical Records",
      value: "1,234",
      change: "+5.7%",
      trend: "up",
      icon: FileText,
    },
    {
      id: 4,
      title: "Appointments",
      value: "156",
      change: "-2.1%",
      trend: "down",
      icon: Calendar,
    },
  ];

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h1>Reports & Analytics</h1>
        <p>Comprehensive healthcare analytics and reporting dashboard</p>
      </div>

      <div className="reports-grid">
        {reportData.map((report) => (
          <div key={report.id} className="report-card">
            <div className="report-icon">
              <report.icon size={24} />
            </div>
            <div className="report-content">
              <h3>{report.title}</h3>
              <div className="report-value">{report.value}</div>
              <div className={`report-change ${report.trend}`}>
                {report.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reports-charts">
        <div className="chart-section">
          <h2>Monthly Patient Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={patientStatsData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="patients" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-section">
          <h2>Revenue Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueTrendsData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports; 