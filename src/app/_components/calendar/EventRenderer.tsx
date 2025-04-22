import React from "react";
import { isLightColor } from "./utils";
import * as HoverCard from "@radix-ui/react-hover-card";

interface CalendarEvent {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

interface EventArg {
  event: {
    title: string;
    extendedProps?: {
      description?: string;
    };
  };
  timeText: string;
}

interface EventRendererProps {
  event: CalendarEvent;
  timeText: string;
  arg: EventArg;
}

const EventRenderer = ({ event, timeText, arg }: EventRendererProps) => {
  const {
    backgroundColor: bgColor = "#6366f1",
    borderColor: borderColor = bgColor,
    textColor: textColor = isLightColor(bgColor) ? "#333" : "#fff",
  } = event;

  const getStartingHour = (time: string) => {
    if (!time) return "";
    const startTime = time.split(" - ")[0];
    return startTime;
  };

  const startTime = getStartingHour(timeText);

  return (
    <HoverCard.Root openDelay={100} closeDelay={150}>
      <HoverCard.Trigger asChild>
        <div
          className="flex flex-col md:flex-row items-center justify-between w-full p-1 space-y-1 md:space-y-0 md:space-x-2 rounded overflow-hidden min-h-full h-full"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            border: `2px solid ${borderColor}`,
            boxSizing: 'border-box',
          }}
        >
          <span className="font-semibold truncate text-xs md:text-sm flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {event.title}
          </span>
          <span className="font-semibold text-xs md:text-sm flex-shrink-0">
            {startTime}
          </span>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          side="top"
          className={`w-64 bg-white/95 backdrop-blur-sm border shadow-sm rounded-md p-3 z-50 animate-in fade-in-50 duration-150 stroke"
          sideOffset={20}`}
          style={{border: `1px solid ${borderColor}`}}
        >
          <div className="relative">
            <div className="pl-3">
              <h3 className="font-medium text-gray-800 mb-1">
                {arg.event.title}
              </h3>
              <p className="text-sm text-gray-500">{timeText}</p>
              {arg.event.extendedProps?.description && (
                <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                  {arg.event.extendedProps.description}
                </p>
              )}
            </div>
          </div>
              <div className="w-2 h-full absolute left-0 top-0 rounded-l-md" style={{backgroundColor: bgColor}}/>
          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default EventRenderer;
