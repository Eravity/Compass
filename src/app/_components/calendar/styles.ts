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
}

/* Toolbar */
.calendar-wrapper .fc .fc-toolbar {
  padding: 8px 16px;
  border-top: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  border-radius: 12px 12px 0 0;
  background: #fff;
  margin-bottom: 0;
}

.calendar-wrapper .fc .fc-toolbar-title {
  font-size: 1.25rem;
  font-weight: 600;
}

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
}

/* Calendar width control */
.calendar-wrapper .fc {
  margin: 0 auto;
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
}

/* Events styling - complete rewrite to fix visual issues */
.calendar-wrapper .fc .fc-timegrid-event,
.calendar-wrapper .fc .fc-daygrid-event {
  margin: 1px 2px !important;
  box-shadow: none !important;
  overflow: hidden !important;
}

/* Remove ALL default borders and backgrounds */
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

/* Event main container */
.calendar-wrapper .fc-event-main {
  border-radius: 4px !important;
  padding: 4px 6px !important;
  margin: 0 !important;
  width: 100% !important;
  box-sizing: border-box !important;
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
  white-space: nowrap !important;
  display: inline-block !important;
}

/* Ensure event content fills space */
.calendar-wrapper .fc-event-main-frame {
  display: flex !important;
  flex-direction: column !important;
  height: 100% !important;
}

/* Fix for multi-day events */
.calendar-wrapper .fc-daygrid-block-event .fc-event-time,
.calendar-wrapper .fc-daygrid-block-event .fc-event-title {
  padding: 0 !important;
}

/* Remove duplicate spacing */
.calendar-wrapper .fc-daygrid-day-events {
  padding: 2px 0 !important;
  margin-top: 28px !important;
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

/* Custom button styles */
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

/* Base & toolbar */
.calendar-wrapper .fc {
  --fc-border-color: #eaeaea;
  --fc-button-text-color: #000;
  --fc-button-bg-color: #fff;
  --fc-button-hover-bg-color: #f0f0f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.calendar-wrapper .fc .fc-toolbar {
  padding: 8px 16px;
  border: 1px solid var(--fc-border-color);
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  background: #fff;
  margin-bottom: 0;
}

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

/* Custom “Add Event” button */
.fc-addEvent-button {
  background-color: #000 !important;
  color: #fff !important;
  font-weight: 600 !important;
  border: 1px solid #000 !important;
}
.fc-addEvent-button:hover {
  background-color: #333 !important;
}

/* DayGrid (month) specifics */
.calendar-wrapper .fc-daygrid-day {
  height: 160px;
  background-color: #fff;
}
.calendar-wrapper .fc-day-other {
  background-color: #f5f5f5;
}
.calendar-wrapper .fc-day-today .fc-daygrid-day-number {
  background-color: #100;
  color: #fff;
  border-radius: 50%;
}

/* TimeGrid (week/day) slot height */
.calendar-wrapper .fc .fc-timegrid-slot {
  height: 40px !important;
}

/* Ensure events fill their slot heights */
.calendar-wrapper .fc .fc-timegrid-event {
  margin: 1px 2px !important;
  box-shadow: none !important;
  overflow: hidden !important;
}
.calendar-wrapper .fc-event-main {
  border-radius: 4px !important;
  padding: 4px 6px !important;
  box-sizing: border-box !important;
}
`;
