import React from "react";

import { Link, useLocation } from "react-router-dom";

const ArticleSingle = (props) => {
  const { img, article } = props;
  const location = useLocation();
  const path = location.pathname;
  return (
    <Link
      to={
        path === "/" ? `article/${article.id}` : `${path}/article/${article.id}`
      }
    >
      <div className="article article--padded--bg">
        {img && <img src={article.fields.thumbnail} alt="" />}
        <h3 className="article__heading--secondary">
          {article.type === "liveblog" ? (
            <>
              <span className="live">{"Live"}</span>
              <span>{` / `}</span>
            </>
          ) : (
            <span>{`${article.sectionName} / `}</span>
          )}
          {article.fields.headline}
        </h3>
      </div>
    </Link>
  );
};

export default ArticleSingle;
