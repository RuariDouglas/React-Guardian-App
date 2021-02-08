import React from "react";
// STYLES
import styled from "styled-components";
import { col, fontS } from "../Styles/Styles";
// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations/animation";

const Title = (props) => {
  const { mainTitle, subTitle } = props.titleData;

  return (
    <>
      <TitleContainer>
        <motion.h2
          className="left-col__title article__heading--primary"
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          {mainTitle}
        </motion.h2>

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
    width: 100%;
    min-height: 5.5rem;
    h2 {
      margin-bottom: 0;
      width: 100%;
      &::after {
        content: "";
        margin-bottom: 0.5rem;
        height: 2px;
        width: 100%;
        display: block;
        background-color: #333;
      }
    }
  }
  @media (max-width: 600px) {
    h6 {
      display: none;
    }
  }
`;

export default Title;
