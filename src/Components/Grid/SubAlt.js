// REACT
import React from "react";

const SubAlt = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="grid grid--3fr-1fr">
          <div className="grid grid--3fr">
            <div className="grid__item--span2 article article--alt">
              <div className="article__img-container article__img-container--overlay">
                <img src={newsData[0].fields.thumbnail} alt="" />
                <div className="grid grid--3fr article-wrapper--overlay">
                  {newsData.map((entry, index) => {
                    if (index > 3 && index < 7) {
                      return (
                        <div className="article article--overlay--blue">
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
            </div>
            <div className="article-wrapper--column">
              <div className="article article--alt article--overlay--blue">
                <div className="article__text-container">
                  <h3 className="article__heading--secondary">
                    {newsData[0].type === "liveblog" ? (
                      <>
                        <span className="article__live-span">{"Live"}</span>
                        <span>{` / `}</span>
                      </>
                    ) : (
                      <span>{`${newsData[0].sectionName} / `}</span>
                    )}
                    {newsData[0].fields.headline}
                  </h3>
                </div>
              </div>
              <div className="article article--alt article--overlay--blue">
                <div className="article__text-container">
                  <h2>
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
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="splitRight">
            <div className="subArticleWrapper">
              <div className="subArticle">
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
              <div className="subArticle">
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
        </div>
      )}
    </>
  );
};

export default SubAlt;
