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
  border-radius: 12px;
  padding-top: 0;
  overflow: hidden;
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
}

/* Calendar grid */
.calendar-wrapper .fc-theme-standard .fc-scrollgrid,
.calendar-wrapper .fc-theme-standard td,
.calendar-wrapper .fc-theme-standard th {
  border-color: var(--fc-border-color) !important;
}

.calendar-wrapper .fc-col-header-cell {
  padding: 8px 0;
}

/* Day cells */
.calendar-wrapper .fc-daygrid-day {
  position: relative;
  height: 160px;
  background-color: #fff;
}

/* Remove active & hover state background on day cells */
.calendar-wrapper .fc-daygrid-day:active,
.calendar-wrapper .fc-daygrid-day:hover {
  background-color: none !important;
}

/* Other month days */
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
  position: relative;
  z-index: 0;
}

/* Events */
.calendar-wrapper .fc-daygrid-event,
.calendar-wrapper .fc-timegrid-event {
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: 2px;
  color: #fff;
}

/* Light background event (custom class) */
.calendar-wrapper .fc-daygrid-event.light-bg {
  color: #333;
}

/* Event borders */
.calendar-wrapper .fc-h-event,
.calendar-wrapper .fc-event-main,
.calendar-wrapper .fc-event-main-frame,
.calendar-wrapper .fc-timegrid-event-harness .fc-timegrid-event,
.calendar-wrapper .fc .fc-daygrid-event,
.calendar-wrapper .fc .fc-daygrid-event-harness,
.calendar-wrapper .fc .fc-event,
.calendar-wrapper .fc .fc-event-dot {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* "More" link */
.calendar-wrapper .fc-daygrid-more-link {
  font-size: 0.75rem;
  color: #666;
  text-decoration: none;
  margin-top: 2px;
  display: block;
}

.calendar-wrapper .fc-daygrid-more-link:hover {
  text-decoration: underline;
}
`;
