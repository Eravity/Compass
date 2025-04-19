import React, { forwardRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarEvent } from "./hooks/useCalendarEvents";
import EventRenderer from "./EventRenderer";
import { getRandomColorTheme } from "./themes";
import { ViewApi } from "@fullcalendar/core/index.js";

interface CalendarBodyProps {
  events: CalendarEvent[];
  onEventAdd: (event: CalendarEvent) => void;
  onDatesSet: (info: { start: Date; end: Date; view: ViewApi }) => void;
}

const CalendarBody = forwardRef<FullCalendar, CalendarBodyProps>(
  ({ events, onEventAdd, onDatesSet }, ref) => {
    const handleSelect = (info: {
      start: Date;
      end: Date;
      startStr: string;
      endStr: string;
      allDay: boolean;
      view: ViewApi;
    }) => {
      const title = prompt("Enter event title:");
      if (!title) return;
      const colorTheme = getRandomColorTheme();
      
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
        allDay: info.allDay,
        ...colorTheme,
      };
      
      info.view.calendar.addEvent(newEvent);
      onEventAdd(newEvent);
    };
    
    return (
      <FullCalendar
        ref={ref}
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
        datesSet={onDatesSet}
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
        eventContent={(arg) => (
          <EventRenderer event={arg.event} timeText={arg.timeText} />
        )}
        dayMaxEvents={3}
        moreLinkContent={({ num }) => `+${num} more`}
      />
    );
  }
);

CalendarBody.displayName = "CalendarBody";

export default CalendarBody;
