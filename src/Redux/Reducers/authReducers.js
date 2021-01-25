const initState = {
  error: "",
  currentUser: {
    email: "",
    password: "",
  },
  loading: true,
};

export const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    default:
      return { ...state };
  }
};
