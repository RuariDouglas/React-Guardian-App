const init = {
  comments: {},
};

export const getCommentsReducer = (state = init, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
