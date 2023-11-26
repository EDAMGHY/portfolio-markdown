export const getCurrentTime = () => {
  // Get the current date and time
  const currentTime = new Date();

  // Get the time in Morocco (UTC +0)
  const time = new Date(
    currentTime.toLocaleString("en-US", { timeZone: "Africa/Casablanca" })
  );

  // Format the time as a string (adjust the format based on your preference)
  const formattedTime = time.toLocaleString("en-US", {
    timeZone: "Africa/Casablanca",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  return formattedTime;
};
