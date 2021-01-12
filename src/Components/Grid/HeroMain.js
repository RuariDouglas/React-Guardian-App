// REACT
import React from "react";

const HeroMain = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="grid grid--3fr-1fr">
          <div className="grid grid--3fr">
            <div className="article article--primary article--hero grid__item grid__item--span3">
              <div className="article__img-container article__img-container--hero">
                <img src={newsData[0].fields.thumbnail} alt="" />
              </div>
              <div className="article__text-container--hero">
                <h2 className="article__heading--primary">
                  {newsData[0].type === "liveblog" ? (
                    <>
                      <span className="live">{"Live"}</span>
                      <span>{` / `}</span>
                    </>
                  ) : (
                    <span>{`${newsData[0].sectionName} / `}</span>
                  )}

                  {newsData[0].fields.headline}
                </h2>
                <p className="article__trail-text">
                  {newsData[0].fields.headline}
                </p>
              </div>
            </div>
            <div className="grid grid--3fr grid__item--span3">
              {newsData.map((entry, index) => {
                if (index > 0 && index < 4) {
                  return (
                    <div className="article--tertiary">
                      <h4 className="article__heading--tertiary">
                        <span>{`${entry.sectionName} / `} </span>
                        {entry.fields.headline}
                      </h4>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            <div className="article article--primary">
              <img src={newsData[3].fields.thumbnail} alt="" />
              <h3 className="article__heading--secondary">
                {newsData[3].type === "liveblog" ? (
                  <>
                    <span className="live">{"Live"}</span>
                    <span>{` / `}</span>
                  </>
                ) : (
                  <span>{`${newsData[3].sectionName} / `}</span>
                )}
                {newsData[3].fields.headline}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroMain;
