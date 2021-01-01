const weatherReducer = (state = "", action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default weatherReducer;
