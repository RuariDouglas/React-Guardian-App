// REACT
import React from "react";
// STYLES
import styled from "styled-components";
import { col, fontS } from "../../Styles/Styles";

const HeroRightCol = (props) => {
  const { newsData, loading } = props;
  return (
    <ArticleBlock>
      {!loading && (
        <>
          <article className="mainArticleRight">
            <img
              style={{ width: "100%" }}
              src={newsData[3].fields.thumbnail}
              alt=""
            />
            <h2>
              <span>{`${newsData[3].sectionName} / `}</span>
              {newsData[3].fields.headline}
            </h2>
          </article>
          <article className="subArticleRight">
            <h2>
              <span>{`${newsData[4].sectionName} / `}</span>
              {newsData[4].fields.headline}
            </h2>
          </article>
          <article className="mainArticleRight">
            <img
              style={{ width: "100%" }}
              src={newsData[8].fields.thumbnail}
              alt=""
            />
            <h2>
              <span>{`${newsData[8].sectionName} / `}</span>
              {newsData[8].fields.headline}
            </h2>
          </article>
          <article className="subArticleRight">
            <h2>
              <span>{`${newsData[9].sectionName} / `}</span>
              {newsData[9].fields.headline}
            </h2>
          </article>
          <article className="mainArticleRight">
            <img
              style={{ width: "100%" }}
              src={newsData[2].fields.thumbnail}
              alt=""
            />
            <h2>
              <span>{`${newsData[2].sectionName} / `}</span>
              {newsData[2].fields.headline}
            </h2>
          </article>
        </>
      )}
    </ArticleBlock>
  );
};

const ArticleBlock = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .mainArticle {
    h2 {
      font-size: ${fontS.large};
    }
  }
`;

export default HeroRightCol;
