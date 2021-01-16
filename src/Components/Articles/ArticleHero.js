import React from "react";

import { Link, useLocation } from "react-router-dom";

const ArticleHero = (props) => {
  const { img, article } = props;
  const location = useLocation();
  const path = location.pathname;
  return (
    <Link
      to={
        path === "/" ? `article/${article.id}` : `${path}/article/${article.id}`
      }
      className="grid__item grid__item--span3"
    >
      <div className="article article--hero article--padded--bg ">
        <div className="article__img-container article__img-container--hero">
          <img src={article.fields.thumbnail} alt="" />
        </div>
        <div className="article__text-container--hero">
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
          <p className="article__trail-text">{article.fields.trailtext}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleHero;
