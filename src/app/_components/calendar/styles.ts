/* Calendar styles */
export const calendarStyles = `
/* Layout & base appearance */
.calendar-wrapper .fc {
  --fc-button-focus-shadow-color: transparent;
  --fc-border-color: #eaeaea;
  --fc-button-text-color: #000;
  --fc-button-bg-color: #fff;
  --fc-button-hover-bg-color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding-top: 0;
  margin: 0 auto;
}

/* Toolbar */
.calendar-wrapper .fc .fc-toolbar {
  padding: 8px 16px;
  border: 1px solid var(--fc-border-color);
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  background: #fff;
  margin-bottom: 0;
}

.calendar-wrapper .fc .fc-toolbar-title {
  font-size: 1.25rem;
  font-weight: 600;
}

/* Button styles */
.calendar-wrapper .fc .fc-button {
  border-radius: 6px;
  text-transform: capitalize;
  font-weight: 500;
  padding: 6px 12px;
  font-size: 0.875rem;
  box-shadow: none;
}

.calendar-wrapper .fc .fc-button:focus,
.calendar-wrapper .fc .fc-button:active {
  outline: none !important;
  box-shadow: none !important;
}

.calendar-wrapper .fc .fc-button-primary:not(:disabled).fc-button-active,
.calendar-wrapper .fc .fc-button-primary:not(:disabled):active {
  color: #fff;
  background-color: var(--fc-button-active-bg-color);
  border-color: var(--fc-button-active-border-color);
}

/* Custom "Add Event" button */
.fc-addEvent-button {
  background-color: #000 !important;
  color: #fff !important;
  font-weight: 600 !important;
  border: 1px solid #000 !important;
}
.fc-addEvent-button:hover {
  background-color: #333 !important;
}

/* View harness spacing */
.calendar-wrapper .fc .fc-view-harness {
  margin-top: 0 !important;
  height: auto !important;
  min-height: auto !important;
}

/* Week and Day view height restriction */
.calendar-wrapper .fc .fc-timeGridWeek-view,
.calendar-wrapper .fc .fc-timeGridDay-view {
  max-height: 80vh;
  margin: 0 auto;
}

/* Calendar grid */
.calendar-wrapper .fc-theme-standard .fc-scrollgrid,
.calendar-wrapper .fc-theme-standard td,
.calendar-wrapper .fc-theme-standard th {
  border-color: var(--fc-border-color) !important;
}

/* Bottom border radius for calendar */
.calendar-wrapper .fc .fc-scrollgrid {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
  position: relative;
}

/* Day cells */
.calendar-wrapper .fc-daygrid-day {
  height: 160px;
  background-color: #fff;
}

.calendar-wrapper .fc-daygrid-day:active,
.calendar-wrapper .fc-daygrid-day:hover {
  background-color: none !important;
}

.calendar-wrapper .fc-day-other {
  background-color: #f5f5f5;
}

.calendar-wrapper .fc-day-other .fc-daygrid-day-number {
  color: #000;
}

/* Today */
.calendar-wrapper .fc-day-today {
  background-color: transparent !important;
}

.calendar-wrapper .fc-day-today .fc-daygrid-day-number {
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  top: 4px !important;
  left: 4px !important;
  font-weight: bold;
}

/* Day number */
.calendar-wrapper .fc-daygrid-day-number {
  font-size: 0.875rem;
  position: absolute !important;
  top: 4px !important;
  left: 4px !important;
  min-width: 28px;
  min-height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Events container */
.calendar-wrapper .fc-daygrid-day-events {
  margin-top: 36px;
  padding: 2px 0 !important;
}

/* Events styling - remove default styling */
.calendar-wrapper .fc-event,
.calendar-wrapper .fc-event-dot,
.calendar-wrapper .fc-event-start,
.calendar-wrapper .fc-event-end,
.calendar-wrapper .fc-event-today,
.calendar-wrapper .fc-timegrid-event,
.calendar-wrapper .fc-daygrid-event,
.calendar-wrapper .fc-h-event,
.calendar-wrapper .fc-v-event {
  border: none !important;
  background: transparent !important;
}

/* Make events take full width in month view */
.calendar-wrapper .fc-daygrid-event-harness {
  width: calc(100% - 4px) !important;
  margin-left: 2px !important;
  margin-right: 2px !important;
}

.calendar-wrapper .fc-daygrid-event {
  width: 100% !important;
}

.calendar-wrapper .fc-daygrid-dot-event {
  display: block !important;
  width: 100% !important;
}

/* Event main container */
.calendar-wrapper .fc-event-main {
  border-radius: 4px !important;
  padding: 4px 6px !important;
  margin: 0 !important;
  width: 100% !important;
  box-sizing: border-box !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden;
}

/* Event content alignment */
.calendar-wrapper .fc-event-time {
  font-size: 0.75em !important;
  opacity: 0.9 !important;
  margin-right: 3px !important;
  display: inline-block !important;
  font-weight: normal !important;
}

.calendar-wrapper .fc-event-title {
  font-size: 0.9em !important;
  font-weight: 500 !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: normal !important;
  display: block !important;
  word-break: break-word !important;
  line-height: 1.2em !important;
}

/* Ensure event content fills space */
.calendar-wrapper .fc-event-main-frame {
  display: flex !important;
  flex-direction: column !important;
}

/* Fix for multi-day events */
.calendar-wrapper .fc-daygrid-block-event .fc-event-time,
.calendar-wrapper .fc-daygrid-block-event .fc-event-title {
  padding: 0 !important;
}

/* More link styling */
.calendar-wrapper .fc-daygrid-more-link {
  font-size: 0.75rem !important;
  color: #666 !important;
  text-decoration: none !important;
  margin-top: 2px !important;
  display: block !important;
}

/* Now indicator on top */
.calendar-wrapper .fc-timegrid-now-indicator-line {
  z-index: 100 !important;
}

/* Fix for event positioning and overlap - time grid specific */
.calendar-wrapper .fc-timegrid-event {
  position: absolute !important;
  width: auto !important;
  right: 0 !important;
  left: 0 !important;
  margin: 1px 2px !important;
  box-shadow: none !important;
  overflow: hidden !important;
}

.calendar-wrapper .fc-timegrid-col-events {
  position: relative !important;
  z-index: 1 !important;
  margin: 0 !important;
}

.calendar-wrapper .fc .fc-timegrid-now-indicator-container {
  z-index: 10 !important;
  position: relative !important;
}
`;
