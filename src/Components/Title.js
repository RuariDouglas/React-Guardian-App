import React from "react";
// STYLES
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { col, fontS } from "../Styles/Styles";

const Title = (props) => {
  const { mainTitle, subTitle } = props.titleData;

  return (
    <>
      <TitleContainer>
        <h2 className="left-col__title article__heading--primary">
          {mainTitle}
        </h2>

        {subTitle && (
          <h6>
            <span>{` ${subTitle[0]} ${subTitle[1]} ${subTitle[2]}`}</span>
          </h6>
        )}
      </TitleContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin-right: 0.5rem;
  }
  h6 {
    display: inline;
    line-height: 1;
    margin: 0;
    span {
      color: ${col.title};
    }
    font-weight: 900;
    font-size: ${fontS.md};
  }
  @media (min-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    h2 {
      margin-bottom: 0;
    }
  }
  @media (max-width: 600px) {
    h6 {
      display: none;
    }
  }
`;

export default Title;
