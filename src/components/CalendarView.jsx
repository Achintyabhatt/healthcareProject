import React from "react";
import "../styles/CalendarView.css";
import { calendarDates } from "../data/calendar";
import { ArrowLeft, ArrowRight, FileX } from "lucide-react";

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <p>Calendar</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <p style={{ display: "flex", alignItems: "center" }}>
          <ArrowLeft></ArrowLeft>
        </p>
        <h4>May</h4>
        <div>
          <ArrowRight></ArrowRight>
        </div>
      </div>
      <div className="calendar-grid">
        {calendarDates.map((date, index) => (
          <div
            key={index}
            className={`calendar-cell ${date.active ? "active" : ""}`}
          >
            {date.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
