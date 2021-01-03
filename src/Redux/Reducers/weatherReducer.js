const initState = {
  weatherData: {},
  forecastData: [],
  loading: true,
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default weatherReducer;
