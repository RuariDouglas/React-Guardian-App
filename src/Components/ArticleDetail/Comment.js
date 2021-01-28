import React, { useState } from "react";
// FIREBASE
import { db } from "../../firebase";
// REDUX
import { useSelector } from "react-redux";

const Comment = (props) => {
  const [toggle, setToggle] = useState(false);
  const { author, comment, commentUid, authorUid } = props;
  const { currentUser, userLoading } = useSelector(
    (state) => state.currentUser
  );

  const editClick = (e) => {
    setToggle(!toggle);
  };
  const deleteClick = (e) => {
    e.stopPropagation();
    db.collection("comments")
      .doc(commentUid)
      .delete()
      .then(() => {
        console.log(`Comment: was deleted`);
      })
      .catch((err) => console.log(err.message));
  };
  const editSubmit = (e) => {
    e.preventDefault();
    console.log("working");
  };
  return (
    <li className="comment">
      <div className="comment__image-container">
        <img src="https://source.unsplash.com/random/100x100" alt="" />
      </div>
      <div className="comment__text-container">
        <p>{author}</p>

        {authorUid === currentUser.uid && (
          <>
            <a onClick={editClick} href="#">
              Edit
            </a>
            <a onClick={deleteClick} href="#">
              Delete
            </a>
          </>
        )}
        {!toggle ? (
          <p>{comment}</p>
        ) : (
          <form onSubmit={editSubmit} action="">
            <textarea
              vale={comment}
              name="editComment"
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <button>Submit Changes</button>
          </form>
        )}
      </div>
    </li>
  );
};

export default Comment;
