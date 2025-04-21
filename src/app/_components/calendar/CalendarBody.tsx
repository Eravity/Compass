import React, { forwardRef, useState } from "react";
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

interface SelectedInfo {
  startStr: string;
  allDay: boolean;
  view: ViewApi;
  defaultDurationHrs: number;
}

const CalendarBody = forwardRef<FullCalendar, CalendarBodyProps>(
  ({ events, onEventAdd, onDatesSet }, ref) => {
    const [pending, setPending] = useState<SelectedInfo | null>(null);
    const [newTitle, setNewTitle] = useState("");
    const [newDuration, setNewDuration] = useState<number>(0);

    const handleSelect = (info: {
      start: Date;
      end: Date;
      startStr: string;
      endStr: string;
      allDay: boolean;
      view: ViewApi;
    }) => {
      const diffHrs = (info.end.getTime() - info.start.getTime()) / 3600000;
      setPending({
        startStr: info.startStr,
        allDay: info.allDay,
        view: info.view,
        defaultDurationHrs: diffHrs || 0.5,
      });
      setNewTitle("");
      setNewDuration(diffHrs || 0.5);
    };

    const createEvent = () => {
      if (!pending || !newTitle.trim()) return;
      const startDate = new Date(pending.startStr);
      const endDate = new Date(startDate.getTime() + newDuration * 3600000);
      const colorTheme = getRandomColorTheme();
      const event = {
        title: newTitle,
        start: pending.startStr,
        end: endDate.toISOString(),
        allDay: pending.allDay,
        ...colorTheme,
      };
      pending.view.calendar.addEvent(event);
      onEventAdd(event);
      setPending(null);
    };

    const cancelCreate = () => setPending(null);

    return (
      <>
        <style>
          {`
        .fc-addEvent-button {
          background-color: black !important;
          color: white !important;
          font-weight: 600 !important;
          border: 1px solid black !important;
        }
        .fc-addEvent-button:hover {
          background-color: #333 !important;
        }
        .fc-timegrid-slot {
          height: 40px !important;
        }
        `}
        </style>
        {pending && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 shadow rounded z-20">
            <input
              className="border px-2 py-1 mr-2"
              placeholder="Event title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              type="number"
              step="0.25"
              min="0.25"
              className="w-20 border px-2 py-1 mr-2"
              value={newDuration}
              onChange={(e) => setNewDuration(parseFloat(e.target.value))}
              placeholder="Duration (hrs)"
            />
            <button
              className="px-2 py-1 bg-black text-white mr-1"
              onClick={createEvent}
            >
              Add
            </button>
            <button className="px-2 py-1" onClick={cancelCreate}>
              Cancel
            </button>
          </div>
        )}
        <FullCalendar
          ref={ref}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "customTodayIndicator title",
            center: "",
            right:
              "prev,today,next dayGridMonth,timeGridWeek,timeGridDay addEvent",
          }}
          customButtons={{
            customTodayIndicator: {
              text: new Date().toLocaleDateString("en-US", {
                day: "numeric",
              }),
              click: () => {},
            },
            addEvent: {
              text: "Add event",
              click: () => {},
            },
          }}
          datesSet={onDatesSet}
          titleFormat={{ year: "numeric", month: "long" }}
          editable={true}
          eventMaxStack={1}
          selectable={true}
          select={handleSelect}
          fixedWeekCount={false}
          events={events}
          height="auto"
          dayHeaderFormat={{ weekday: "short" }}
          dayHeaderClassNames="text-sm font-medium"
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
          }}
          // Week view specific settings
          allDaySlot={false}
          slotDuration="00:30:00"
          slotMinTime="07:00:00"
          slotMaxTime="19:00:00"
          scrollTime="08:00:00"
          businessHours={{
            daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
            startTime: "08:00",
            endTime: "17:00",
          }}
          nowIndicator={true}
          // Fix event overlap issues
          slotEventOverlap={false}
          eventClassNames="calendar-event"
          eventContent={(arg) => (
            <EventRenderer event={arg.event} timeText={arg.timeText} />
          )}
          dayMaxEvents={3}
          moreLinkContent={({ num }) => `+${num} more`}
        />
      </>
    );
  }
);

CalendarBody.displayName = "CalendarBody";

export default CalendarBody;
