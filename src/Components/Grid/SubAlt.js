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
              <div className="article-wrapper--column">
                <div className="article__img-container article__img-container--overlay">
                  <img src={newsData[0].fields.thumbnail} alt="" />
                </div>
                <div className="article-wrapper">
                  {newsData.map((entry, index) => {
                    if (index > 0 && index < 4) {
                      return (
                        <div className="article--alt article--overlay--blue">
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
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="article-wrapper--column">
            <div className="article article--alt article--overlay--blue">
              <img src={newsData[0].fields.thumbnail} alt="" />
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
          </div>
        </div>
      )}
    </>
  );
};

export default SubAlt;
