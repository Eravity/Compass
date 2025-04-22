import React from "react";
import { isLightColor } from "./utils";

interface CalendarEvent {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

interface EventRendererProps {
  event: CalendarEvent;
  timeText: string;
}

const EventRenderer = ({ event, timeText }: EventRendererProps) => {
  const bgColor = event.backgroundColor || "#6366f1";
  const borderColor = event.borderColor || bgColor;
  const textColor = event.textColor || (isLightColor(bgColor) ? "#333" : "#fff");

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between w-full p-1 space-y-1 md:space-y-0 md:space-x-2 rounded"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `2px solid ${borderColor}`,
      }}
    >
      <span className="font-semibold truncate text-xs md:text-sm">
        {event.title}
      </span>
      <span className="font-semibold text-xs md:text-sm">{timeText}</span>
    </div>
  );
};

export default EventRenderer;
