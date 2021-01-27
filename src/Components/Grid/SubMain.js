// REACT
import React from "react";

import ArticlePrimary from "../Articles/ArticlePrimary";
import ArticleSingle from "../Articles/ArticleSingle";

const SubMain = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="grid grid--3fr-1fr">
          <div className="grid grid--3fr">
            {newsData.forEach((article, index) =>
              index === 5 ? (
                <ArticlePrimary
                  id={article.id}
                  key={article.id}
                  article={article}
                />
              ) : (
                ""
              )
            )}

            <div className="article-wrapper--column">
              {newsData.forEach((article, index) => {
                if (index > 4 && index < 8) {
                  return (
                    <ArticleSingle
                      id={article.id}
                      key={article.id}
                      img={false}
                      article={article}
                    />
                  );
                }
              })}
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            {newsData.forEach((article, index) => {
              if (index > 7 && index < 11) {
                return (
                  <ArticleSingle
                    id={article.id}
                    key={article.id}
                    img={false}
                    article={article}
                  />
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SubMain;
