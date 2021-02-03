// REACT
import React from "react";
import { Link } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// STYLES
import { col, fontS } from "../../Styles/Styles";
import styled from "styled-components";

const MenuLinks = () => {
  const dispatch = useDispatch();
  const menuToggle = useSelector((state) => state.menuToggle);
  const closeMenu = (e) => {
    return menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";
  };

  return (
    <List>
      <li>
        <Link onClick={closeMenu} to="/#">
          News
        </Link>
      </li>
      <li>
        <Link onClick={closeMenu} to="/commentisfree">
          Opinion
        </Link>
      </li>
      <li>
        <Link onClick={closeMenu} to="/sport">
          Sport
        </Link>
      </li>
      <li>
        <Link onClick={closeMenu} to="/culture">
          Culture
        </Link>
      </li>
      <li>
        <Link onClick={closeMenu} to="/lifestyle">
          LifeStyle
        </Link>
      </li>
      <li className="link-guardian">
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
    height: 100%;
    &:hover {
      background-color: ${col.brandPastel};
    }
  }
  @media (min-width: 960px) {
    a {
      padding: 0.5rem 1rem;
    }
  }

  /* li.link-guardian {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      min-width: 5rem;
      max-width: 6rem;
      padding: 0.5rem;
    }
  } */
`;

export default MenuLinks;
