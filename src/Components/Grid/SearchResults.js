// REACT
import React from "react";

import ArticlePrimary from "../Articles/ArticlePrimary";
import ArticleSingle from "../Articles/ArticleSingle";

const SearchResults = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="grid grid--3fr-1fr">
          <div className="grid grid--3fr">
            <div className="article-wrapper--column">
              {newsData.map((article, index) => {
                if (index >= 0 && index <= 4) {
                  return (
                    <ArticleSingle
                      id={article.id}
                      key={article.id}
                      img={true}
                      article={article}
                    />
                  );
                }
              })}
            </div>
            <div className="article-wrapper--column">
              {newsData.map((article, index) => {
                if (index >= 5 && index <= 9) {
                  return (
                    <ArticleSingle
                      id={article.id}
                      key={article.id}
                      img={true}
                      article={article}
                    />
                  );
                }
              })}
            </div>

            <div className="article-wrapper--column">
              {newsData.map((article, index) => {
                if (index >= 10 && index <= 14) {
                  return (
                    <ArticleSingle
                      id={article.id}
                      key={article.id}
                      img={true}
                      article={article}
                    />
                  );
                }
              })}
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            {newsData.map((article, index) => {
              if (index >= 15 && index <= 19) {
                return (
                  <ArticleSingle
                    id={article.id}
                    key={article.id}
                    img={true}
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

export default SearchResults;
