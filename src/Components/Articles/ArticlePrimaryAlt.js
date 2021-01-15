import React from "react";
import { useLocation } from "react-router-dom";

const ArticlePrimaryAlt = (props) => {
  const { img, article } = props;
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <div className="grid__item--span3 article  article--padded--bg article--w-trailtext">
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
  );
};

export default ArticlePrimaryAlt;
