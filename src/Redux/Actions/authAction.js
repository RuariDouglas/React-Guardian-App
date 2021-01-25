import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
// REDUX
import { useDispatch } from "react-redux";
// FIREBASE
import { auth } from "../../firebase";

export const signUp = (email, password) => async (dispatch) => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((creds) => {
        dispatch({
          type: "SIGNUP_USER",
          payload: {
            error: "",
            currentUser: {
              email: creds.user.email,
              uid: creds.user.uid,
            },
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGNUP_FAILED",
          payload: {
            error: err.message,
            currentUser: {
              email: "",
              uid: "",
            },
          },
        });
      });
  } catch {
    console.log("fucked up");
  }
};
