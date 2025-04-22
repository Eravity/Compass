"use client";

import { FormEvent, useState } from "react";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Process form data here
    console.log({ title, date });
    // clear fields
    setTitle("");
    setDate("");
  };

  const handleCancel = () => {
    // clear fields
    setTitle("");
    setDate("");
  };

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="event-title" className="text-sm font-semibold">
          Event Title
        </label>
        <input
          id="event-title"
          type="text"
          className="border rounded-md p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="event-date" className="text-sm font-semibold">
          Event Date
        </label>
        <input
          id="event-date"
          type="date"
          className="border rounded-md p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="flex gap-2 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

