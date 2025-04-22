export const useTimeFormats = () => {
  const eventTimeFormat = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const slotLabelFormat= {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return { eventTimeFormat, slotLabelFormat };
};
