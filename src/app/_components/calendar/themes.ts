// Color themes for calendar events

// Define theme type
export interface ColorTheme {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

// Define available color themes
export const colorThemes: ColorTheme[] = [
  { backgroundColor: '#ffe3fa', borderColor: '#ebb8db', textColor: '#ab3375' }, // Pink
  { backgroundColor: '#cce3ff', borderColor: '#9cccff', textColor: '#2e7dd1' }, // Blue
  { backgroundColor: '#ddffd9', borderColor: '#82d186', textColor: '#329c2f' }, // Green
  { backgroundColor: '#ffe3d9', borderColor: '#f2a796', textColor: '#f56f49' }, // Coral
  { backgroundColor: '#ffefd9', borderColor: '#f2cd96', textColor: '#db9a09' }, // Yellow
  { backgroundColor: '#e6d9ff', borderColor: '#bf96f2', textColor: '#5d09db' }, // Purple
  { backgroundColor: '#f9f7fc', borderColor: '#ababab', textColor: '#8c8c8c' }  // Gray
];

// Get a random color theme
export const getRandomColorTheme = (): ColorTheme => {
  const randomIndex = Math.floor(Math.random() * colorThemes.length);
  return colorThemes[randomIndex];
};
