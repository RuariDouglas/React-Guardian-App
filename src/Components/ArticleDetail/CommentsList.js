// REACT
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../Redux/Actions/dbAction";

// COMPONENTS
import Comment from "./Comment";

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
  console.log(comments);
  return (
    <div className="article-detail">
      <ul>
        {comments.map((comment) => {
          return (
            <Comment
              author={comment.author_name}
              uid={comment.author_uid}
              key={comment.url}
              id={comment.url}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
