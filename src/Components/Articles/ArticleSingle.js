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
      <div className="article">
        {img && <img src={article.fields.thumbnail} alt="" />}
        <div className="article__text-container">
          <p className="article__section-title">
            <span>{article.sectionName}</span>
          </p>
          <div className="article__line"></div>
          <h3 className="article__heading--secondary">
            {article.fields.headline}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ArticleSingle;
