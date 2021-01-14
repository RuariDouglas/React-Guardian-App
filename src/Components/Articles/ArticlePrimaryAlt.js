import React from "react";
import { useLocation } from "react-router-dom";

const ArticlePrimaryAlt = (props) => {
  const { img, newsData } = props;
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <div className="grid__item--span3 article  article--padded--bg">
      <div className="article__img-container">
        <img src={newsData[12].fields.thumbnail} alt="" />
      </div>
      <div className="article__text-container">
        <h2 className="article__heading--primary">
          {newsData[12].type === "liveblog" ? (
            <>
              <span className="article__live-span">{"Live"}</span>
              <span>{` / `}</span>
            </>
          ) : (
            <span>{`${newsData[12].sectionName} / `}</span>
          )}

          {newsData[12].fields.headline}
        </h2>
      </div>
    </div>
  );
};

export default ArticlePrimaryAlt;
