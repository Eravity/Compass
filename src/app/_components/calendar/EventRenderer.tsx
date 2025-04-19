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
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        color: textColor,
        backgroundColor: bgColor,
        border: `1.5px solid ${borderColor}`,
        padding: "2px 6px",
        borderRadius: "4px",
      }}
    >
      <span className="font-semibold">{event.title}</span>
      <span className="font-semibold">{timeText}</span>
    </div>
  );
};

export default EventRenderer;
