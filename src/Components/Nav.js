// REACT & MISC
import React, { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import SideNav from "./SideNav";

// STYLES & IMAGES
import styled from "styled-components";
import { col, fontS } from "../Styles/Styles";

// MATERIAL UI
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// REDUX
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  //REDUX
  const menuToggle = useSelector((state) => state.menuToggle);
  const dispatch = useDispatch();
  console.log(menuToggle);
  return (
    <>
      <SideNav />
      <NavBg>
        <div className="navContainer">
          <Logo>
            <Typography variant="h2">
              <span>the</span>guardian
            </Typography>
          </Logo>
          <Menu>
            <ul>
              <li>
                <Link to="/">Item</Link>
              </li>
              <li>
                <Link>Item</Link>
              </li>
              <li>
                <Link>Item</Link>
              </li>
              <li>
                <Link>Item</Link>
              </li>
              <li>
                <Link>Item</Link>
              </li>
              <li>
                <Link>Item</Link>
              </li>
            </ul>
            <IconButton onClick={() => dispatch({ type: "TOGGLE" })}>
              {!menuToggle ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </Menu>
        </div>
      </NavBg>
    </>
  );
};

const NavBg = styled.header`
  background: ${col.primary};
  height: 20vh;
  min-height: 140px;
  .navContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    z-index: 0;
    @media (max-width: 730px) {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const Logo = styled.div`
  align-self: flex-end;
  margin-top: 2rem;
  h2 {
    color: ${col.white};
    span {
      color: ${col.pLight};
    }
  }
  @media (max-width: 730px) {
    align-self: auto;
  }
`;

const Menu = styled.nav`
  display: flex;
  width: 100%;
  padding-right: 1rem;
  border-top: 1px solid ${col.pLight};
  border-left: 1px solid ${col.pLight};
  border-right: 1px solid ${col.pLight};
  position: absolute;
  z-index: 0;
  bottom: 0;
  ul {
    display: flex;
    width: 100%;
    align-items: space-between;
    li {
      display: inline-block;
      a {
        display: block;
        padding: 1rem;
        color: white;
        font-weight: bold;
        font-size: ${fontS.large};
        transition: all 1s ease;
        &:hover {
          background-color: ${col.pLight};
        }
      }
    }
  }
  @media (max-width: 730px) {
    border: none;
    width: auto;
    padding: 1rem;
    ul {
      display: none;
    }
  }
`;

export default Nav;
