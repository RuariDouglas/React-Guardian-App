// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../Redux/Actions/dbAction";

// COMPONENTS
import Comment from "./Comment";
import CreateComment from "./CreateComment";

const CommentsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // REDUX
  const articlePath = "exampleUrl";
  // const articlePath = location.pathname.split("/article/")[1];
  useEffect(() => {
    dispatch(getComments(articlePath));
  }, []);
  const { comments } = useSelector((state) => state.comments);
  return (
    <div className="comments__container">
      <CreateComment />
      <h2>Comments</h2>
      <ul className="comments__list">
        {comments.map((comment) => {
          return (
            <Comment
              author={comment.author_name}
              uid={comment.author_uid}
              key={comment.author_uid}
              id={comment.author_uid}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
