// Date formatter (pages/home.js)
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

export const guardianDateFormatter = (unformattedDate) => {
  const year = unformattedDate.substr(0, 4);
  const month = unformattedDate.substr(5, 2);
  const day = unformattedDate.substr(8, 2);
  const time = unformattedDate.substr(11, 5);
  return `${day}/${month}/${year} @ ${time}`;
};

export const getPath = (path) => {
  if (path === "/") {
    return "home";
  } else if (path === "/commentisfree") {
    return "opinion";
  } else {
    return "other";
  }
};

// Check for displaying Account links (nav.js)
export const checkUser = (logStatus, currentUser, userLoading) => {
  if (logStatus === "loggedOut") {
    if (userLoading && currentUser.email.length === 0) {
      return "liShown";
    }
  }
  if (logStatus === "loggedIn") {
    if (!userLoading && currentUser.email.length > 0) {
      return "liShown";
    }
  }
};
