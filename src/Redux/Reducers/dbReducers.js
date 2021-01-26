const initUser = {
  currentUser: {
    email: "",
    uid: "",
  },
  userLoading: true,
};
const initError = {
  error: "",
};

export const currentUserReducer = (state = initUser, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
export const errorReducer = (state = initError, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};
