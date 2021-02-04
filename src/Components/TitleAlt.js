import React from "react";
// STYLES
import styled from "styled-components";
import { col, fontS } from "../Styles/Styles";

const TitleAlt = (props) => {
  const { mainTitle, subTitle } = props.titleData;
  const { url, tagline, subTag } = subTitle;

  return (
    <>
      <TitleContainer>
        <div className="maintitleContainer">
          <h2 className="left-col__title article__heading--primary">
            {mainTitle}
          </h2>
        </div>

        {subTitle && (
          <>
            <div className="subtitleContainer">
              <div className="textContainer">
                <p>{tagline}</p>
                <h6>{subTag}</h6>
              </div>
              <div className="imgContainer">
                <img src={url} alt="CP Scott Photo" />
              </div>
            </div>
          </>
        )}
      </TitleContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 0.5rem 0;
  width: 100%;
  .maintitleContainer {
    justify-self: flex-start;
  }
  .subtitleContainer {
    display: flex;
    align-items: center;
  }
  .imgContainer {
    border-radius: 50%;
    height: 60px;
    width: 60px;
    margin-left: 0.5rem;
    background-color: #dbd3c8;
    overflow: hidden;
    position: relative;
    right: auto;
    img {
      position: absolute;
      bottom: 0;
      left: 5px;
    }
  }
  .textContainer {
    justify-self: flex-start;
    letter-spacing: -0.9px;
    font-size: 90%;
    p {
      color: #6e6d6c;
    }

    h6 {
      margin: 0;
      font-weight: 700;
    }
  }

  @media (min-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 0.5rem;
    .subtitleContainer {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    .imgContainer {
      height: 80px;
      width: 80px;
      margin-left: 0;
      background-color: #dbd3c8;
      overflow: hidden;
      position: relative;
      right: auto;
      margin-bottom: 0.5rem;
      img {
        position: absolute;
        bottom: 0;
        left: 5px;
      }
    }
    h2 {
      margin-bottom: 0;
      width: 100%;
      &::after {
        content: "";
        margin-top: 0.25rem;
        margin-bottom: 0.5rem;
        height: 2px;
        width: 100%;
        display: block;
        background-color: #333;
      }
    }
  }
  @media (min-width: 755px) {
    .textContainer {
      font-size: 100%;
    }
  }
  @media (max-width: 500px) {
    .subtitleContainer {
      margin-bottom: 0.5rem;
    }
    .imgContainer {
      display: none;
    }
  }
`;

export default TitleAlt;
