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
  const { comments, commentsLoading } = useSelector((state) => state.comments);

  // REDUX
  const articlePath = location.pathname.split("/article/")[1];
  useEffect(() => {
    dispatch(getComments(articlePath));
  }, [dispatch]);

  return (
    <>
      {!commentsLoading && (
        <div className="comments__container">
          <CreateComment url={articlePath} />
          <h2>Comments</h2>
          <ul className="comments__list">
            {comments.map((comment) => {
              return (
                <Comment
                  author={comment.author}
                  comment={comment.comment}
                  authorUid={comment.author_uid}
                  key={comment.commentUid}
                  id={comment.commentUid}
                />
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default CommentsList;
