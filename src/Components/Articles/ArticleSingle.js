import React from "react";

const ArticleSingle = (props) => {
  const { img, article } = props;
  return (
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
  );
};

export default ArticleSingle;
