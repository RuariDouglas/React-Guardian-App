// FIREBASE
import { auth } from "../../firebase";
import { push } from "connected-react-router";

const errorHandler = (err) => {
  return {
    type: "ERROR",
    payload: {
      error: err ? err.message : "",
    },
  };
};

const success = (email, uid) => {
  return {
    type: "CURRENT_USER",
    payload: {
      email: email,
      uid: uid,
    },
  };
};

const resetCurrentUser = () => {
  return {
    type: "CURRENT_USER",
    payload: {
      email: "",
      uid: "",
    },
  };
};

export const signUp = (email, password) => async (dispatch) => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(push("/"));
      })
      .catch((err) => {
        dispatch(errorHandler(err));
      });
  } catch {}
};

export const login = (email, password) => async (dispatch) => {
  try {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(push("/"));
      })
      .catch((err) => {
        dispatch(errorHandler(err));
      });
  } catch {}
};

export const logout = () => async (dispatch) => {
  try {
    auth.signOut();
  } catch {}
};

export const stateChange = (user) => (dispatch) => {
  if (user) {
    dispatch(success(user.email, user.uid));
  } else {
    dispatch(resetCurrentUser());
  }
};

export const clearData = () => (dispatch) => {
  try {
    dispatch(errorHandler());
  } catch {}
};
