// REACT
import React from "react";

const SubAlt = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="splitContainer">
          <div className="splitLeft">
            <div className="mainArticle altMainArticle">
              <div className="imgContainer">
                <img src={newsData[0].fields.thumbnail} alt="" />
                <div className="subArticleWrapper">
                  {newsData.map((entry, index) => {
                    if (index > 3 && index < 7) {
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
            </div>
            <div className="subArticleWrapper">
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
              <div className="subArticle altSubArticle">
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
