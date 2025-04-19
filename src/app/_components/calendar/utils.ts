// Utility functions for the calendar component

// Determine if a color is light or dark
export const isLightColor = (color: string) => {
  // For hex colors
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    // Calculate perceived brightness
    return (r * 0.299 + g * 0.587 + b * 0.114) > 160;
  }
  return false; // Default to dark for non-hex colors
};
