import { ViewApi } from "@fullcalendar/core/index.js";
import { useState, useEffect } from "react";

export const useDateRange = () => {
  const [dateRange, setDateRange] = useState("");

  // Update date range when calendar view changes
  const handleDatesSet = (info: {
    start: Date;
    end: Date;
    view: ViewApi;
  }) => {
    // Get the current month and year from the view's date
    const currentDate = info.view.currentStart;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Create first day of the month
    const firstDay = new Date(year, month, 1);

    // Create last day of the month (day 0 of next month is last day of current month)
    const lastDay = new Date(year, month + 1, 0);

    // Format the dates
    const formattedStart = firstDay.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const formattedEnd = lastDay.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    setDateRange(`${formattedStart} - ${formattedEnd}`);
  };

  // Effect to inject date range into DOM
  useEffect(() => {
    if (dateRange) {
      setTimeout(() => {
        const titleElement = document.querySelector(".fc-toolbar-title");
        if (titleElement) {
          // Check if we already have a date range element
          let rangeElement = document.getElementById("calendar-date-range");

          if (!rangeElement) {
            // Create new element if it doesn't exist
            rangeElement = document.createElement("div");
            rangeElement.id = "calendar-date-range";
            rangeElement.className = "text-sm text-gray-600 mt-1";
            titleElement.appendChild(rangeElement);
          }

          // Update the content
          rangeElement.textContent = dateRange;
        }
      }, 0);
    }
  }, [dateRange]);

  return {
    dateRange,
    handleDatesSet
  };
};
