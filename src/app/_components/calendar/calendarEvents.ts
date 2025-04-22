const colorThemes = [
  { backgroundColor: "#ffe3fa", borderColor: "#ebb8db", textColor: "#ab3375" },
  { backgroundColor: "#cce3ff", borderColor: "#9cccff", textColor: "#2e7dd1" },
  { backgroundColor: "#ddffd9", borderColor: "#82d186", textColor: "#329c2f" },
  { backgroundColor: "#ffe3d9", borderColor: "#f2a796", textColor: "#f56f49" },
  { backgroundColor: "#ffefd9", borderColor: "#f2cd96", textColor: "#db9a09" },
  { backgroundColor: "#e6d9ff", borderColor: "#bf96f2", textColor: "#5d09db" },
  { backgroundColor: "#f9f7fc", borderColor: "#ababab", textColor: "#8c8c8c" },
];

const getRandomTheme = () =>
  colorThemes[Math.floor(Math.random() * colorThemes.length)];

const calendarEvents = [
  Array.from({ length: 30 }, (_, i) => ({
    title: "Daily Meet",
    date: `2025-04-${String(i + 1).padStart(2, "0")}T09:00:00`,
    ...colorThemes[i % colorThemes.length],
  })),
  // 40 more random events
  ...Array.from({ length: 40 }, (_, i) => {
    const day = Math.floor(Math.random() * 30) + 1;
    const hour = Math.floor(Math.random() * 8) + 9; 
    const minute = Math.random() < 0.5 ? "00" : "30";
    const theme = getRandomTheme();
    return {
      title: `Event ${i + 6}`,
      date: `2025-04-${String(day).padStart(2, "0")}T${String(hour).padStart(
        2,
        "0"
      )}:${minute}:00`,
      ...theme,
    };
  }),
];

export default calendarEvents;
