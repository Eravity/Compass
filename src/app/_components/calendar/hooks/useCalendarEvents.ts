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
  // Initialize events with proper mapping of date to start
  const [events, setEvents] = useState<CalendarEvent[]>(
    calendarEvents.map(event => ({
      ...event,
      start: event.date,
    }))
  );
  const [filteredEvents, setFilteredEvents] = useState<CalendarEvent[]>(events);
  
  // Handle adding a new event
  const addEvent = useCallback((newEvent: CalendarEvent) => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
    setFilteredEvents(prevEvents => [...prevEvents, newEvent]);
  }, []);
  
  // Handle search functionality
  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) {
      // If search is empty, show all events
      setFilteredEvents(events);
      return;
    }

    // Filter events based on the query
    const lowercaseQuery = query.toLowerCase();
    const filtered = events.filter(event => {
      // Always check title
      const titleMatch = event.title.toLowerCase().includes(lowercaseQuery);
      
      // Safely check description if it exists
      const descriptionMatch = typeof event.description === 'string' && 
        event.description.toLowerCase().includes(lowercaseQuery);
      
      return titleMatch || descriptionMatch;
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
