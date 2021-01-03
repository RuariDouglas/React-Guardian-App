export const menuToggleReducer = (state = false, action) => {
  switch (action.type) {
    case "SIDE_NAV_TOGGLE":
      return !state;
    default:
      return state;
  }
};
export const weatherToggleReducer = (state = false, action) => {
  switch (action.type) {
    case "WEATHER_TOGGLE":
      return !state;
    default:
      return state;
  }
};
