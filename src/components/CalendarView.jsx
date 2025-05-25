import React from 'react';
import '../styles/CalendarView.css';
import { calendarDates } from '../data/calendar';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h2>Calendar</h2>
      <div className="calendar-grid">
        {calendarDates.map((date, index) => (
          <div key={index} className={`calendar-cell ${date.active ? 'active' : ''}`}>
            {date.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
