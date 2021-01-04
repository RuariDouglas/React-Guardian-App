const initState = {
  sectionData: {},
  isLoading: true,
};

const guardianReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SECTION":
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default guardianReducer;
