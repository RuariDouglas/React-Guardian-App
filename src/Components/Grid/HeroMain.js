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
            <ArticleHero newsData={newsData} />
            <div className="grid grid--3fr grid__item--span3">
              {newsData.map((entry, index) => {
                if (index > 0 && index < 4) {
                  return <ArticleTertiary entry={entry} />;
                }
              })}
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            <ArticleSingle img={true} newsData={newsData} />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroMain;
