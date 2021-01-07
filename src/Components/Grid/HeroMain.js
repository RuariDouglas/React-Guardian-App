// REACT
import React from "react";
// STYLES
import styled from "styled-components";
import { col, fontS } from "../../Styles/Styles";

const HeroMain = (props) => {
  const { newsData, loading } = props;
  return (
    <ArticleBlock>
      {!loading && (
        <>
          <article
            className={`mainArticle ${
              newsData[0].type === "liveblog" ? "red" : ""
            }`}
          >
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
              <p className="trailText">{newsData[0].fields.headline}</p>
            </div>
          </article>
          <article className="subArticle">
            <h2>
              <span>{`${newsData[1].sectionName} / `}</span>
              {newsData[1].fields.headline}
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
        </>
      )}
    </ArticleBlock>
  );
};

const ArticleBlock = styled.section`
  height: 100%;

  @media (min-width: 755px) {
    display: flex;
    flex-flow: row wrap;
    .mainArticle {
      display: block;
      display: flex;
      flex-flow: row wrap;
      img {
        width: 50%;
        order: 2;
      }
      .textContainer {
        order: 1;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .trailText {
          display: block;
        }
      }
    }
  }
`;

export default HeroMain;
