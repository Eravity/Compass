import { useState, useCallback } from "react";
import calendarEvents from "../calendarEvents";

// Define calendar event type
export interface CalendarEvent {
  id?: string;
  title: string;
  start: string | Date;
  end?: string | Date;
  allDay?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  description?: string;
  [key: string]: string | number | boolean | Date | undefined;
}

export const useCalendarEvents = () => {
  interface SourceEvent {
    date: string | Date;
    title: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    description?: string;
    allDay?: boolean;
    [key: string]: string | number | boolean | Date | undefined; // Allow other properties if necessary
  }
  
    // Initialize events with proper mapping of date to start
    const [events, setEvents] = useState<CalendarEvent[]>(
      (calendarEvents as SourceEvent[]).map((event: SourceEvent): CalendarEvent => {
        const { date, ...rest } = event;
        return {
          ...rest,
          start: date,
        };
      })
    );
    const [filteredEvents, setFilteredEvents] = useState<CalendarEvent[]>(events);
  
  // Handle adding a new event
  const addEvent = useCallback((newEvent: CalendarEvent) => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
    setFilteredEvents(prevEvents => [...prevEvents, newEvent]);
  }, []);
  
  // Handle search functionality
  const handleSearch = useCallback((query: string) => {
    const trimmed = String(query ?? '').trim();
    if (!trimmed) {
      setFilteredEvents(events);
      return;
    }
    const lowercaseQuery = trimmed.toLowerCase();
    const filtered = events.filter(event => {
      const title = String(event.title ?? '').toLowerCase();
      const description = String(event.description ?? '').toLowerCase();
      return title.includes(lowercaseQuery) || description.includes(lowercaseQuery);
    });
    setFilteredEvents(filtered);
  }, [events]);

  return {
    events,
    filteredEvents,
    addEvent,
    handleSearch
  };
};
