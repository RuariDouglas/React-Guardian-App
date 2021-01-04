export const dateFormatter = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  // Day
  let dayIndex = date.getDay();
  let dayString = days[dayIndex];
  // Date
  let dayNumber = date.getDate().toString();
  // Month
  let monthIndex = date.getMonth();
  let month = months[monthIndex];
  // Year
  let year = date.getFullYear().toString();
  return [dayString, dayNumber, month, year];
};
