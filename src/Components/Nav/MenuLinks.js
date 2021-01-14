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
        <Link to="/commentisfree">Opinion</Link>
      </li>
      <li>
        <Link to="/sport">Sport</Link>
      </li>
      <li>
        <Link to="/culture">Culture</Link>
      </li>
      <li>
        <Link to="/lifestyle">LifeStyle</Link>
      </li>
      <li>
        <img
          src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianREV.png"
          alt="The Guardian"
        />
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
  li {
    img {
      width: 75%;
    }
  }
`;

export default MenuLinks;
