// REACT
import React from "react";
// STYLES
import styled from "styled-components";
import { col, fontS } from "../../Styles/Styles";

const SubMain = (props) => {
  const { newsData, loading } = props;
  return (
    <ArticleBlock>
      {!loading && (
        <>
          <div className="subMainLeft">
            <article
              className={`mainArticle subMainArticle ${
                newsData[6].type === "liveblog" ? "red" : ""
              }`}
            >
              <img src={newsData[6].fields.thumbnail} alt="" />
              <div className="textContainer">
                <h2>
                  {newsData[6].type === "liveblog" ? (
                    <>
                      <span className="live">{"Live"}</span>
                      <span>{` / `}</span>
                    </>
                  ) : (
                    <span>{`${newsData[6].sectionName} / `}</span>
                  )}

                  {newsData[6].fields.headline}
                </h2>
                <p className="trailText">{newsData[6].fields.headline}</p>
              </div>
            </article>
            <article className="subArticle">
              <h2>
                <span>{`${newsData[2].sectionName} / `}</span>
                {newsData[2].fields.headline}
              </h2>
            </article>
            <article className="subArticle">
              <h2>
                <span>{`${newsData[2].sectionName} / `}</span>
                {newsData[2].fields.headline}
              </h2>
            </article>
            <article className="subArticle">
              <h2>
                <span>{`${newsData[2].sectionName} / `}</span>
                {newsData[2].fields.headline}
              </h2>
            </article>
          </div>
          <div className="subMainRight">
            <article
              className={`mainArticle subMainArticle ${
                newsData[6].type === "liveblog" ? "red" : ""
              }`}
            >
              <img src={newsData[6].fields.thumbnail} alt="" />
              <div className="textContainer">
                <h2>
                  {newsData[6].type === "liveblog" ? (
                    <>
                      <span className="live">{"Live"}</span>
                      <span>{` / `}</span>
                    </>
                  ) : (
                    <span>{`${newsData[6].sectionName} / `}</span>
                  )}

                  {newsData[6].fields.headline}
                </h2>
              </div>
            </article>
            <article className="subArticle">
              <h2>
                <span>{`${newsData[2].sectionName} / `}</span>
                {newsData[2].fields.headline}
              </h2>
            </article>
            <article className="subArticle">
              <h2>
                <span>{`${newsData[2].sectionName} / `}</span>
                {newsData[2].fields.headline}
              </h2>
            </article>
            <article className="subArticle">
              <h2>
                <span>{`${newsData[2].sectionName} / `}</span>
                {newsData[2].fields.headline}
              </h2>
            </article>
            <article className="subArticle">
              <h2>
                <span>{`${newsData[2].sectionName} / `}</span>
                {newsData[2].fields.headline}
              </h2>
            </article>
          </div>
        </>
      )}
    </ArticleBlock>
  );
};

const ArticleBlock = styled.section`
  height: 100%;
`;

export default SubMain;
