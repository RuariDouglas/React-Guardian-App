// FIREBASE
import { db } from "../../firebase";

const commentsDispatch = (comments) => {
  return {
    type: "GET_COMMENTS",
    payload: {
      comments: comments,
      commentsLoading: false,
    },
  };
};
const clearCommentsDispatch = () => {
  return {
    type: "CLEAR_COMMENTS",
    payload: {
      comments: {},
      commentsLoading: true,
    },
  };
};

export const getComments = (articlePath) => async (dispatch) => {
  try {
    let commentsArray = [];
    db.collection("comments")
      .orderBy("index")
      .where("url", "==", articlePath)
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type === "added") {
            let commentDetails = change.doc.data();
            commentDetails.commentUid = change.doc.id;
            commentsArray.unshift(commentDetails);
          }
        });
        dispatch(commentsDispatch(commentsArray));
      })
      .catch((err) => console.log(err.message));
  } catch {}
};

export const clearComments = () => async (dispatch) => {
  try {
    dispatch(clearCommentsDispatch());
  } catch {}
};
