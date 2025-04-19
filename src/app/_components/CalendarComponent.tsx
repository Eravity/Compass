"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useRef, useEffect } from "react";

// Utilități și date
import { isLightColor } from "./calendar/utils";
import { getRandomColorTheme } from "./calendar/themes";
import { calendarStyles } from "./calendar/styles";
import calendarEvents from "./calendar/calendarEvents";

const CalendarComponent = () => {
  const [events] = useState(calendarEvents);
  const [dateRange, setDateRange] = useState("");
  const calendarRef = useRef<FullCalendar>(null);

  // Handler pentru selecția intervalelor
  const handleSelect = (info: {
    start: Date;
    end: Date;
    startStr: string;
    endStr: string;
    allDay: boolean;
    view: import("@fullcalendar/core").ViewApi;
  }) => {
    const title = prompt("Enter event title:");
    if (!title) return;
    const colorTheme = getRandomColorTheme();
    info.view.calendar.addEvent({
      title,
      start: info.startStr,
      end: info.endStr,
      allDay: info.allDay,
      ...colorTheme,
    });
  };

  // Update date range when calendar view changes
  const handleDatesSet = (info: {
    start: Date;
    end: Date;
    view: import("@fullcalendar/core").ViewApi;
  }) => {
    // Get the current month and year from the view's date
    const currentDate = info.view.currentStart;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Create first day of the month
    const firstDay = new Date(year, month, 1);

    // Create last day of the month (day 0 of next month is last day of current month)
    const lastDay = new Date(year, month + 1, 0);

    // Format the dates
    const formattedStart = firstDay.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const formattedEnd = lastDay.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    setDateRange(`${formattedStart} - ${formattedEnd}`);
  };

  // Add effect to modify the DOM directly to insert date range
  useEffect(() => {
    if (dateRange) {
      setTimeout(() => {
        const titleElement = document.querySelector(".fc-toolbar-title");
        if (titleElement) {
          // Check if we already have a date range element
          let rangeElement = document.getElementById("calendar-date-range");

          if (!rangeElement) {
            // Create new element if it doesn't exist
            rangeElement = document.createElement("div");
            rangeElement.id = "calendar-date-range";
            rangeElement.className = "text-sm text-gray-600 mt-1";
            titleElement.appendChild(rangeElement);
          }

          // Update the content
          rangeElement.textContent = dateRange;
        }
      }, 0); // Small delay to ensure the calendar has rendered
    }
  }, [dateRange]);

  return (
    <div className="calendar-wrapper" style={{ minHeight: "100vh" }}>
      <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "customTodayIndicator title",
        center: "",
        right: "prev,today,next dayGridMonth,timeGridWeek,timeGridDay",
      }}
      customButtons={{
        customTodayIndicator: {
        text: new Date().toLocaleDateString("en-US", {
          day: "numeric",
        }),
        click: () => {},
        },
      }}
      datesSet={handleDatesSet}
      titleFormat={{ year: "numeric", month: "long" }}
      editable={true}
      selectable={true}
      select={handleSelect}
      fixedWeekCount={false}
      events={events}
      slotEventOverlap={true}
      eventMaxStack={3}
      height="auto"
      dayHeaderFormat={{ weekday: "short" }}
      dayHeaderClassNames="text-sm font-medium"
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
        hour12: false,
      }}
      eventClassNames="rounded-md"
      eventContent={(arg) => {
        const bgColor = arg.event.backgroundColor || "#6366f1";
        const borderColor = arg.event.borderColor || bgColor;
        const textColor =
        arg.event.textColor || (isLightColor(bgColor) ? "#333" : "#fff");

        return (
        <div
          style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          color: textColor,
          backgroundColor: bgColor,
          border: `1.5px solid ${borderColor}`,
          padding: "2px 6px",
          borderRadius: "4px",
          }}
        >
          <span className="font-semibold">{arg.event.title}</span>
          <span className="font-semibold">{arg.timeText}</span>
        </div>
        );
      }}
      dayMaxEvents={3}
      moreLinkContent={({ num }) => `+${num} more`}
      />

      {/* Injectăm stilurile optimizate */}
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
      /* Style for today indicator button ONLY */
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
