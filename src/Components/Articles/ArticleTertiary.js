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
      <div className="article article--padded--bg">
        <h4 className="article__heading--tertiary">
          <span>{`${article.sectionName} / `} </span>
          {article.fields.headline}
        </h4>
      </div>
    </Link>
  );
};

export default ArticleTertiary;
