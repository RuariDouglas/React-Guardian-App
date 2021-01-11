// REACT
import React from "react";

const HeroMain = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="splitContainer">
          <div className="splitLeftHero">
            <div className="mainArticle">
              <div className="imgContainer">
                <img src={newsData[0].fields.thumbnail} alt="" />
              </div>
              <div className="textContainer">
                <h2>
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
                <p className="trailText">{newsData[0].fields.headline}</p>
              </div>
            </div>
            <div className="subArticleWrapper">
              {newsData.map((entry, index) => {
                if (index > 0 && index < 4) {
                  return (
                    <div className="subArticle">
                      <h4>
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
          <div className="splitRightHero">
            <div className="mainArticle">
              <img src={newsData[0].fields.thumbnail} alt="" />
              <div className="textContainer">
                <h2>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroMain;
