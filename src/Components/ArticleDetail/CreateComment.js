// REACT
import React, { useRef } from "react";
// REDUX
import { useSelector } from "react-redux";
// FIREBASE
import { db } from "../../firebase";

const CreateComment = (props) => {
  const commentRef = useRef();
  const { currentUser } = useSelector((state) => state.currentUser);
  const { comments } = useSelector((state) => state.comments);
  const createCommentHandler = (e) => {
    const authorUid = currentUser.uid;
    const name = currentUser.name;
    const url = props.url;
    e.preventDefault();
    db.collection("comments")
      .add({
        author: name,
        author_uid: authorUid,
        comment: commentRef.current.value,
        url: url,
        index: comments.length + 1,
      })
      .catch((err) => {
        console.log(err.message);
      });
    commentRef.current.value = "";
  };
  return (
    <div className="create-comment__container">
      <form onSubmit={createCommentHandler} action="">
        <textarea ref={commentRef} name="" id="" cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateComment;
