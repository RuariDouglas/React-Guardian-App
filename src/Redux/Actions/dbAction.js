// FIREBASE
import { db } from "../../firebase";

const commentsDispatch = (comments) => {
  return {
    type: "GET_COMMENTS",
    payload: {
      comments: comments,
    },
  };
};

export const getComments = (articlePath) => async (dispatch) => {
  try {
    let commentsArray = [];
    db.collection("comments")
      .where("url", "==", articlePath)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          commentsArray.push(doc.data());
        });
      })
      .then(() => {
        dispatch(commentsDispatch(commentsArray));
      });
  } catch {}
};
