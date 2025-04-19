import React from "react";
import SearchEvents from "./SearchEvents";

interface CalendarHeaderProps {
  onSearch: (query: string) => void;
}

const CalendarHeader = ({ onSearch }: CalendarHeaderProps) => {
  return (
    <div className=" flex justify-between mb-4">
      <h1 className="text-2xl font-semibold ">Calendar</h1>
      <SearchEvents 
        onSearch={onSearch}
        placeholder="Search events..."
        className="w-75"
      />
    </div>
  );
};

export default CalendarHeader;
