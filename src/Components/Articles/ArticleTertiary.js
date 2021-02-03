import React from "react";

import { Link, useLocation } from "react-router-dom";

const ArticleTertiary = (props) => {
  const { article } = props;
  const location = useLocation();
  const path = location.pathname;
  return (
    <Link
      to={
        path === "/" ? `article/${article.id}` : `${path}/article/${article.id}`
      }
    >
      <div className="article article--tertiary">
        <div className="article__text-container">
          <p className="article__section-title article__section-title-tertiary">
            <span>{article.sectionName}</span>
          </p>
          <h2 className="article__heading--tertiary">
            {article.fields.headline}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ArticleTertiary;
