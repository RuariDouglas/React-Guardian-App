import React from "react";

import { Link, useLocation } from "react-router-dom";

const ArticlePrimary = (props) => {
  const { img, article } = props;
  const location = useLocation();
  const path = location.pathname;
  return (
    <Link
      to={
        path === "/" ? `article/${article.id}` : `${path}/article/${article.id}`
      }
      className="grid__item--span2"
    >
      <div className="article article--padded--bg article--w-trailtext">
        <div className="article__img-container">
          <img src={article.fields.thumbnail} alt="" />
        </div>
        <div className="article__text-container">
          <h2 className="article__heading--primary">
            {article.type === "liveblog" ? (
              <>
                <span className="article__live-span">{"Live"}</span>
                <span>{` / `}</span>
              </>
            ) : (
              <span>{`${article.sectionName} / `}</span>
            )}
            {article.fields.headline}
          </h2>
          <p className="article__trail-text">{article.fields.trailText}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePrimary;
