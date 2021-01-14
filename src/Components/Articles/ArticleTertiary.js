import React from "react";

const ArticleTertiary = (props) => {
  const { article } = props;
  return (
    <div className="article article--padded--bg">
      <h4 className="article__heading--tertiary">
        <span>{`${article.sectionName} / `} </span>
        {article.fields.headline}
      </h4>
    </div>
  );
};

export default ArticleTertiary;
