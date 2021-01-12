// REACT
import React from "react";

const SubMain = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="grid grid--3fr-1fr">
          <div className="grid grid--3fr">
            <div className="grid__item--span2 article article--primary">
              <div className="article__img-container">
                <img src={newsData[0].fields.thumbnail} alt="" />
              </div>
              <div className="article__text-container">
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
              </div>
            </div>
            <div className="article-wrapper--column">
              {newsData.map((entry, index) => {
                if (index > 0 && index < 5) {
                  return (
                    <div className="article article--secondary">
                      <h3 className="article__heading--secondary">
                        <span>{`${entry.sectionName} / `} </span>
                        {entry.fields.headline}
                      </h3>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            {newsData.map((entry, index) => {
              if (index > 4 && index < 9) {
                return (
                  <div className="article article--secondary ">
                    <h3 className="article__heading--secondary">
                      <span>{`${entry.sectionName} / `} </span>
                      {entry.fields.headline}
                    </h3>
                  </div>
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
