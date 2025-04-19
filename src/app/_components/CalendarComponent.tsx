"use client";

import { useRef } from "react";
import FullCalendar from "@fullcalendar/react";

// Custom components and hooks
import { useCalendarEvents } from "./calendar/hooks/useCalendarEvents";
import { useDateRange } from "./calendar/hooks/useDateRange";
import CalendarHeader from "./calendar/CalendarHeader";
import CalendarBody from "./calendar/CalendarBody";
import { calendarStyles } from "./calendar/styles";

const CalendarComponent = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const { filteredEvents, handleSearch, addEvent } = useCalendarEvents();
  const { handleDatesSet } = useDateRange();

  return (
    <div className="calendar-wrapper" style={{ minHeight: "100vh" }}>
      <CalendarHeader onSearch={handleSearch} />
      
      <CalendarBody 
        ref={calendarRef}
        events={filteredEvents}
        onEventAdd={addEvent}
        onDatesSet={handleDatesSet}
      />

      {/* Styles */}
      <style>{`
        ${calendarStyles}
        /* Style for date range display */
        #calendar-date-range {
          display: inline-block;
          font-size: 0.875rem;
          margin-top: 0;
          margin-right: 1rem;
          align-self: flex-start;
        }
        /* Make the title container work with the added element */
        .fc-toolbar-title {
          display: flex;
          flex-direction: column;
        }
        /* Style for today indicator button */
        .fc-customTodayIndicator-button {
          background: black !important;
          color: white !important;
          font-weight: bold !important;
          aspect-ratio: 1;
          border: none;
          margin-left: 1rem;
          cursor: default;
          pointer-events: none;
          display: flex;
        }
        .fc-toolbar-chunk:first-child {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .calendar-wrapper {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default CalendarComponent;
