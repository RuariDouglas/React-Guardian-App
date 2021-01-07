// REACT
import React from "react";
import { Link } from "react-router-dom";

// STYLES
import { col, fontS } from "../../Styles/Styles";
import styled from "styled-components";

const MenuLinks = () => {
  return (
    <List>
      <li>
        <Link to="/#">News</Link>
      </li>
      <li>
        <Link to="/#">Opinion</Link>
      </li>
      <li>
        <Link to="/#">Sport</Link>
      </li>
      <li>
        <Link to="/#">Culture</Link>
      </li>
      <li>
        <Link to="/#">LifeStyle</Link>
      </li>
    </List>
  );
};

const List = styled.ul`
  a {
    display: block;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    font-size: ${fontS.large};
    transition: all 1s ease;
    &:hover {
      background-color: ${col.pLight};
    }
  }
`;

export default MenuLinks;
