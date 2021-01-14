import React from "react";

const ArticleTertiary = (props) => {
  const { entry } = props;
  return (
    <div className="article article--tertiary article--padded--bg">
      <h4 className="article__heading--tertiary">
        <span>{`${entry.sectionName} / `} </span>
        {entry.fields.headline}
      </h4>
    </div>
  );
};

export default ArticleTertiary;
