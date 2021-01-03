import React from "react";
// STYLES
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { fontS } from "../Styles/Styles";

const Title = (props) => {
  const { mainTitle, subTitle } = props.titleData;
  return (
    <TitleContainer>
      <h2>{mainTitle}</h2>
      {subTitle ? <Typography variant="h6">{subTitle}</Typography> : ""}
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  padding: 1rem;
  h2 {
    font-size: ${fontS.large};
    font-weight: 900;
  }
  h6 {
    font-weight: bold;
    font-size: ${fontS.md};
  }
`;

export default Title;
