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
  let commentsArray = [];
  try {
    db.collection("comments")
      .orderBy("index")
      .where("url", "==", articlePath)
      .onSnapshot(
        (snapshot) => {
          let changes = snapshot.docChanges();
          changes.map((change) => {
            let commentDetails = {};
            commentDetails = change.doc.data();
            commentDetails.commentUid = change.doc.id;
            if (change.type === "added") commentsArray.unshift(commentDetails);
            else if (change.type === "modified") {
              const index = commentsArray.findIndex(
                (v) => v.commentUid === commentDetails.commentUid
              );
              if (index > -1) {
                commentsArray.splice(index, index + 1);
                commentsArray.unshift(commentDetails);
              }
            } else if (change.type === "removed") {
              const index = commentsArray.findIndex(
                (v) => v.commentUid === commentDetails.commentUid
              );
              if (index > -1) commentsArray.splice(index, index + 1);
            }
          });
          dispatch(commentsDispatch(commentsArray));
        },
        (err) => {
          console.log(err.message);
        }
      );
  } catch {}
};

export const clearComments = () => async (dispatch) => {
  try {
    dispatch(clearCommentsDispatch());
  } catch {}
};
