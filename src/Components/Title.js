import React from "react";
// STYLES
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { col, fontS } from "../Styles/Styles";

const Title = (props) => {
  const { mainTitle, subTitle } = props.titleData;
  const day = subTitle[0];
  const dateString = subTitle.slice(1, subTitle.length);

  return (
    <TitleContainer>
      <h2>{mainTitle}</h2>
      {subTitle ? (
        <>
          <Typography variant="h6">{day}</Typography>

          <Typography variant="h6">
            <span>{` ${dateString[0]} ${dateString[1]} ${dateString[2]}`}</span>
          </Typography>
        </>
      ) : (
        ""
      )}
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  padding: 1rem;
  h2 {
    font-size: ${fontS.large};
    font-weight: 900;
    padding-bottom: 0.5rem;
  }
  h6 {
    display: inline;
    line-height: 1;
    span {
      color: ${col.title};
    }
    font-weight: 900;
    font-size: ${fontS.md};
  }
  @media (min-width: 960px) {
    h6 {
      display: block;
    }
  }
`;

export default Title;
