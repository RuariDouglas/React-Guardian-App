// REACT
import React from "react";
import { Link } from "react-router-dom";

// STYLING
import { col, eightyVw } from "../../Styles/Styles";
import styled from "styled-components";

// MATERIAL UI
import TypoGraphy from "@material-ui/core/Typography";

const SubNav = () => {
  return (
    <SubNavContainer>
      <ul>
        <li>
          <Link>
            <TypoGraphy variant="subtitle1">Hello</TypoGraphy>
          </Link>
        </li>
        <li>
          <Link>
            <TypoGraphy variant="subtitle1">Hello</TypoGraphy>
          </Link>
        </li>
        <li>
          <Link>
            <TypoGraphy variant="subtitle1">Hello</TypoGraphy>
          </Link>
        </li>
        <li>
          <Link>
            <TypoGraphy variant="subtitle1">Hello</TypoGraphy>
          </Link>
        </li>
        <li>
          <Link>
            <TypoGraphy variant="subtitle1">Hello</TypoGraphy>
          </Link>
        </li>
      </ul>
    </SubNavContainer>
  );
};

const SubNavContainer = styled.nav`
  position: relative;
  z-index: 0;
  ${eightyVw.sizer};

  overflow: hidden;
  box-shadow: 0px 2px 1rem 0 rgba(0, 0, 0, 0.3);
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      a {
        padding: 0 1rem;
        display: block;
        color: ${col.grey};
      }
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 1rem;
    ul {
      justify-content: space-between;
      li {
        a {
          padding: 0;
          display: block;
          color: ${col.grey};
        }
      }
    }
  }
`;

export default SubNav;
