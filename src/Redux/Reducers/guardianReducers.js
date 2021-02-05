const initState = {
  sectionData: {},
  loading: true,
};

const guardianReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SECTION":
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case "CLEAR_SECTION":
      return initState;
    default:
      return { ...state };
  }
};

export default guardianReducer;
