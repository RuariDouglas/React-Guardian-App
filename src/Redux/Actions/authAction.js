// FIREBASE
import { auth, db } from "../../firebase";
import { push } from "connected-react-router";

const errorHandler = (err) => {
  return {
    type: "ERROR",
    payload: {
      error: err ? err.message : "",
    },
  };
};

const success = (name, email, uid) => {
  return {
    type: "CURRENT_USER",
    payload: {
      currentUser: {
        name: name,
        email: email,
        uid: uid,
      },
      userLoading: false,
    },
  };
};

const resetCurrentUser = () => {
  return {
    type: "CURRENT_USER",
    payload: {
      currentUser: {
        name: "",
        email: "",
        uid: "",
      },
      userLoading: true,
    },
  };
};
// SEE CHANGESTATE ************************
export const signUp = (name, email, password) => async (dispatch) => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((creds) => {
        db.collection("users").doc(creds.user.uid).set({
          name: name,
          email: email,
        });
      })
      .then((creds) => {
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

export const stateChange = (user) => async (dispatch) => {
  if (user) {
    // GET USER FROM DATABASE BASED ON UID, DISPATCH SUCCESS WITH DB.RETRIEVED DETAILS
    let matchedUser = await db.collection("users").doc(user.uid).get();
    let name = matchedUser.data().name;
    dispatch(success(name, user.email, user.uid));
  } else {
    dispatch(resetCurrentUser());
  }
};

export const clearData = () => (dispatch) => {
  try {
    dispatch(errorHandler());
  } catch {}
};
