// REACT
import React from "react";

import ArticleSingle from "../Articles/ArticleSingle";
import ArticlePrimaryAlt from "../Articles/ArticlePrimaryAlt";

const SubAlt = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="grid grid--3fr-1fr">
          <div className="grid grid--3fr">
            {newsData.map((article, index) =>
              index === 11 ? <ArticlePrimaryAlt article={article} /> : ""
            )}
          </div>

          <div className="article-wrapper--column">
            {newsData.map((article, index) =>
              index > 12 && index < 15 ? (
                <ArticleSingle img={true} article={article} />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SubAlt;
