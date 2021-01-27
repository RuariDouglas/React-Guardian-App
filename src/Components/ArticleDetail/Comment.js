import React from "react";

const Comment = (props) => {
  return (
    <li className="comment">
      <div className="comment__image-container">
        <img src="https://source.unsplash.com/random/100x100" alt="" />
      </div>
      <div className="comment__text-container">
        <p>{props.author}</p>
        <p>{props.comment}</p>
      </div>
    </li>
  );
};

export default Comment;
