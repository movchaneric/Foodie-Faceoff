export const getRandomColor = () => {
  const colors = [
    "#F76B15",
    "#0491FF",
    "#8347B9",
    "#DC3C5E",
    "#DD4525",
    "#3E9A50",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export function capitalizeFirstLetter(str) {
  if (!str || typeof str !== "string") {
    return ""; // Handle invalid input
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Remove spaces after string
export function removeSpaceAfterString(str) {
  //Regular expression identifying space: /\s+$/
  return str.replace(/\s+$/, "");
}
