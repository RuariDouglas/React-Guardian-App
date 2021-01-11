// REACT
import React from "react";

const SubMain = (props) => {
  const { newsData, loading } = props;
  return (
    <>
      {!loading && (
        <div className="splitContainer">
          <div className="splitLeft">
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
              </div>
            </div>
            <div className="subArticleWrapper">
              {newsData.map((entry, index) => {
                if (index > 0 && index < 5) {
                  return (
                    <div className="subArticle">
                      <h2>
                        <span>{`${entry.sectionName} / `} </span>
                        {entry.fields.headline}
                      </h2>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="splitRight">
            <div className="subArticleWrapper">
              {newsData.map((entry, index) => {
                if (index > 4 && index < 9) {
                  return (
                    <div className="subArticle">
                      <h2>
                        <span>{`${entry.sectionName} / `} </span>
                        {entry.fields.headline}
                      </h2>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubMain;
