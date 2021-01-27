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

export const getComments = (articlePath) => async (dispatch) => {
  try {
    let commentsArray = [];
    const retrievedComments = await db
      .collection("comments")
      .where("url", "==", articlePath)
      .get();
    retrievedComments.docs.forEach((doc) => {
      let commentDetails = doc.data();
      commentDetails.commentUid = doc.id;
      commentsArray.push(commentDetails);
    });
    dispatch(commentsDispatch(commentsArray));
  } catch {}
};
