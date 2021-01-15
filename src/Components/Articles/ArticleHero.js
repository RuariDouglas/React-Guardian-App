import React from "react";

const ArticleHero = (props) => {
  const { img, article } = props;
  console.log(article);
  return (
    <div className="article article--hero article--padded--bg  grid__item grid__item--span3">
      <div className="article__img-container article__img-container--hero">
        <img src={article.fields.thumbnail} alt="" />
      </div>
      <div className="article__text-container--hero">
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
        <p className="article__trail-text">{article.fields.trailtext}</p>
      </div>
    </div>
  );
};

export default ArticleHero;
