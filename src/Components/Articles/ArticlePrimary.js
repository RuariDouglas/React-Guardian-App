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
      <div className="article article--w-trailtext">
        <div className="article__img-container">
          <img src={article.fields.thumbnail} alt="" />
        </div>
        <div className="article__text-container">
          <p className="article__section-title article__section-title--hero">
            <span>{article.sectionName}</span>
          </p>
          <div className="article__line"></div>
          <h2 className="article__heading--primary">
            {article.fields.headline}
          </h2>
          <p className="article__trail-text">{article.fields.trailText}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePrimary;
