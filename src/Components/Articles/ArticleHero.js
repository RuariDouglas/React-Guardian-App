import React from "react";

const ArticleHero = (props) => {
  const { img, newsData } = props;
  return (
    <div className="article article--primary article--hero article--padded--bg  grid__item grid__item--span3">
      <div className="article__img-container article__img-container--hero">
        <img src={newsData[0].fields.thumbnail} alt="" />
      </div>
      <div className="article__text-container--hero">
        <h2 className="article__heading--primary">
          {newsData[0].type === "liveblog" ? (
            <>
              <span className="article__live-span">{"Live"}</span>
              <span>{` / `}</span>
            </>
          ) : (
            <span>{`${newsData[0].sectionName} / `}</span>
          )}

          {newsData[0].fields.headline}
        </h2>
        <p className="article__trail-text">{newsData[0].fields.headline}</p>
      </div>
    </div>
  );
};

export default ArticleHero;
