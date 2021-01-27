// REACT
import React, { useRef } from "react";
// REDUX
import { useSelector } from "react-redux";
// FIREBASE
import { db } from "../../firebase";

const CreateComment = () => {
  const commentRef = useRef();
  const { currentUser } = useSelector((state) => state.currentUser);
  const createCommentHandler = (e) => {
    let commenterUid = currentUser.uid;
    let name = currentUser.name;
    e.preventDefault();
    db.collections("comments").add({
      name: currentUser.name,
      comment: commentRef.current.value,
    });
    console.log(commentRef.current.value);
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
