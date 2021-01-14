// REACT
import React from "react";

import ArticleHero from "../Articles/ArticleHero";
import ArticleSingle from "../Articles/ArticleSingle";
import ArticleTertiary from "../Articles/ArticleTertiary";

const HeroMain = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="grid grid--3fr-1fr">
          <div className="grid grid--3fr">
            {newsData.map((article, index) =>
              index === 0 ? <ArticleHero article={article} /> : ""
            )}

            <div className="grid grid--3fr grid__item--span3">
              {newsData.map((article, index) =>
                index > 0 && index < 4 ? (
                  <ArticleTertiary article={article} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            {newsData.map((article, index) =>
              index === 4 ? <ArticleSingle img={true} article={article} /> : ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroMain;
