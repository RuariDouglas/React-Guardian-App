import React from "react";

const ArticleSingle = (props) => {
  const { img, newsData } = props;
  return (
    <div className="article article--primary article--padded--bg">
      {img && <img src={newsData[3].fields.thumbnail} alt="" />}
      <h3 className="article__heading--secondary">
        {newsData[3].type === "liveblog" ? (
          <>
            <span className="live">{"Live"}</span>
            <span>{` / `}</span>
          </>
        ) : (
          <span>{`${newsData[3].sectionName} / `}</span>
        )}
        {newsData[3].fields.headline}
      </h3>
    </div>
  );
};

export default ArticleSingle;
