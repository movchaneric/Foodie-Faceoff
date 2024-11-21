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
