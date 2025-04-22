"use client";

import React, { FormEvent, useState } from "react";
import { CalendarEvent } from "./hooks/useCalendarEvents";
import { ViewApi } from "@fullcalendar/core/index.js";
import { getRandomColorTheme } from "./themes";

interface EventFormProps {
  startStr: string;
  allDay: boolean;
  view: ViewApi;
  defaultDurationHrs: number;
  onEventAdd: (event: CalendarEvent) => void;
  onClose: () => void;
}

const EventForm: React.FC<EventFormProps> = ({
  startStr,
  allDay: initAllDay,
  defaultDurationHrs,
  onEventAdd,
  onClose,
}) => {
  const startDt = new Date(startStr);
  const endDt = new Date(startDt.getTime() + defaultDurationHrs * 3600e3);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allDay, setAllDay] = useState(initAllDay);
  const [startDate, setStartDate] = useState(startDt.toISOString().slice(0, 10));
  const [startTime, setStartTime] = useState(startDt.toTimeString().slice(0, 5));
  const [endDate, setEndDate] = useState(endDt.toISOString().slice(0, 10));
  const [endTime, setEndTime] = useState(endDt.toTimeString().slice(0, 5));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const start = allDay
      ? new Date(startDate)
      : new Date(`${startDate}T${startTime}`);
    const end = allDay
      ? new Date(endDate)
      : new Date(`${endDate}T${endTime}`);
    const theme = getRandomColorTheme();
    onEventAdd({ title, start, end, allDay, description, ...theme });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full border rounded px-2 py-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="allDay"
              type="checkbox"
              checked={allDay}
              onChange={() => setAllDay(!allDay)}
              className="h-4 w-4"
            />
            <label htmlFor="allDay" className="text-sm">
              All Day
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                required
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 w-full border rounded px-2 py-1"
              />
            </div>
            {!allDay && (
              <div>
                <label className="block text-sm font-medium">Start Time</label>
                <input
                  type="time"
                  required
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="mt-1 w-full border rounded px-2 py-1"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium">End Date</label>
              <input
                type="date"
                required
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 w-full border rounded px-2 py-1"
              />
            </div>
            {!allDay && (
              <div>
                <label className="block text-sm font-medium">End Time</label>
                <input
                  type="time"
                  required
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="mt-1 w-full border rounded px-2 py-1"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full border rounded px-2 py-1"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;

