import React, { useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { guardianDateFormatter } from "../../Functions";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { clearComments } from "../../Redux/Actions/dbAction";
// COMPONENTS
import CommentsList from "./CommentsList";
// MATERIALUI
import CloseIcon from "@material-ui/icons/Close";
import TwitterIcon from "@material-ui/icons/Twitter";

const Article = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathUnmodified = location.pathname;
  const regex = /^\/[a-z]+(\/(article)\/)/g;
  const pathId = pathUnmodified.match(regex)
    ? pathUnmodified.replace(regex, "")
    : pathUnmodified.replace("/article/", "");
  // Redux
  const { loading } = useSelector((state) => state.guardian);
  const menuToggle = useSelector((state) => state.menuToggle);
  // Components
  const { rootPath, sectionData } = props;
  const closeArticle = (e) => {
    const element = e.target;
    if (
      element.classList.contains("shadow") ||
      element.classList.contains("close")
    ) {
      document.body.style.overflow = "auto";
      dispatch(clearComments());
      if (rootPath === "/") {
        history.push(rootPath);
      } else if (rootPath === "search") {
        history.goBack();
      } else {
        history.push(`/${rootPath}`);
      }
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";
  }, [dispatch]);

  return (
    <>
      {!loading && (
        <div onClick={closeArticle} className="shadow detail">
          <div className="detail__bg">
            <div className="detail__container">
              <CloseIcon onClick={closeArticle} className="close" />

              {sectionData
                .filter((entry) => entry.id === pathId)
                .map((article) => (
                  <div key={article.id} className="detail__inner-wrapper">
                    {article.fields.thumbnail ? (
                      <img
                        className="detail__img"
                        src={article.fields.thumbnail}
                        alt=""
                      />
                    ) : (
                      ""
                    )}

                    <h3 className="detail__section-title">
                      {article.sectionName}
                    </h3>
                    <h1 className="detail__heading--primary">
                      {article.fields.headline}
                    </h1>
                    <div className="detail__line"></div>
                    <div className="detail__meta">
                      <p>
                        {article.tags.length ? (
                          <Link
                            className="detail__link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.theguardian.com/profile/scottmurray"
                          >
                            {article.tags[0].webTitle}
                          </Link>
                        ) : (
                          ""
                        )}
                        {` ${guardianDateFormatter(
                          article.fields.lastModified
                        )}`}
                      </p>
                    </div>

                    <div
                      className="detail__response"
                      dangerouslySetInnerHTML={{ __html: article.fields.body }}
                    ></div>
                  </div>
                ))}
            </div>
            <CommentsList />
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
