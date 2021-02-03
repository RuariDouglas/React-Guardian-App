import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// FIREBASE
import { db } from "../../firebase";
// REDUX
import { useSelector } from "react-redux";

const Comment = (props) => {
  const [toggle, setToggle] = useState(false);
  const editInputRef = useRef();
  const { author, comment, commentUid, authorUid } = props;
  const { currentUser } = useSelector((state) => state.currentUser);

  const editClick = (e) => {
    setToggle(!toggle);
  };
  const deleteClick = (e) => {
    e.stopPropagation();
    db.collection("comments")
      .doc(commentUid)
      .delete()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };
  const editSubmit = (e) => {
    e.preventDefault();
    db.collection("comments")
      .doc(commentUid)
      .update({
        comment: `Edited: ${editInputRef.current.value}`,
      })
      .then(() => setToggle(!toggle));
  };
  return (
    <li className="comment">
      <div className="comment__container">
        <div className="comment__image-container">
          <img src="https://source.unsplash.com/random/100x100" alt="" />
        </div>
        <div className="comment__text-container">
          <p className="comment__author-title">{author}</p>
          {!toggle ? (
            <p className="comment__comment-text">{comment}</p>
          ) : (
            <form onSubmit={editSubmit}>
              <textarea
                ref={editInputRef}
                defaultValue={comment}
                className="comment__edit-comment-input"
                name="editComment"
              ></textarea>
              <button className="comment__edit-comment-button">
                Publish Changes
              </button>
            </form>
          )}
          {authorUid === currentUser.uid && (
            <div className="comment__crud-container">
              <Link className="comment__edit" onClick={editClick} to="#">
                Edit
              </Link>
              <Link className="comment__delete" onClick={deleteClick} to="#">
                Delete
              </Link>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Comment;
