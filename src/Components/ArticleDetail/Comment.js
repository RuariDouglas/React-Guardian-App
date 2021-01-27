import React from "react";

const Comment = (props) => {
  return (
    <li className="comment">
      <div className="comment__image-container">
        <img src="https://source.unsplash.com/random/100x100" alt="" />
      </div>
      <div className="comment__text-container">
        <p>{props.author}</p>
        <p>
          Mid-way through the decade, and where are we? On the up, on the whole.
          Developments in technology like clockwork motors and commercially
          viable disc recordings mean that the volume of surviving recordings is
          increasing exponentially.
        </p>
      </div>
    </li>
  );
};

export default Comment;
