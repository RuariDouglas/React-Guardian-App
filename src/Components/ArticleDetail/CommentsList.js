// REACT
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../Redux/Actions/dbAction";

// COMPONENTS
import Comment from "./Comment";
import CreateComment from "./CreateComment";
// STYLES
import logo from "../../Images/logo.png";

const CommentsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { comments, commentsLoading } = useSelector((state) => state.comments);
  const { currentUser, userLoading } = useSelector(
    (state) => state.currentUser
  );
  // REDUX
  const articlePath = location.pathname.split("/article/")[1];
  useEffect(() => {
    dispatch(getComments(articlePath));
  }, [dispatch]);

  return (
    <>
      <div className="comments__container">
        <h2 className="comments__heading">Comments</h2>
        {currentUser.name && !userLoading && (
          <CreateComment url={articlePath} />
        )}
        {!commentsLoading && (
          <ul className="comments__list">
            {comments.map((comment) => {
              return (
                <Comment
                  author={comment.author}
                  comment={comment.comment}
                  authorUid={comment.author_uid}
                  commentUid={comment.commentUid}
                  key={comment.commentUid}
                  id={comment.commentUid}
                />
              );
            })}
          </ul>
        )}
        <div className="comment__footer">
          <Link to="/">
            <img src={logo} alt="The Guardian Logo" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CommentsList;
