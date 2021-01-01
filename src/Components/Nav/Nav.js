// REACT & MISC
import React from "react";
import { Link } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import SideNav from "./SideNav";
import MenuLinks from "./MenuLinks";
import SubNav from "./SubNav";

// STYLES
import styled from "styled-components";
import { col, eightyVw } from "../../Styles/Styles";

// MATERIAL UI
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Nav = () => {
  const menuToggle = useSelector((state) => state.menuToggle);
  const dispatch = useDispatch();
  return (
    <>
      <SideNav />
      <NavBg>
        <div className="navContainer">
          <Logo>
            <Typography variant="h2">
              <Link>
                <span>the</span>guardian
              </Link>
            </Typography>
          </Logo>
          <MainMenu>
            <MenuLinks />
            <IconButton onClick={() => dispatch({ type: "TOGGLE" })}>
              {!menuToggle ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </MainMenu>
        </div>
      </NavBg>
      <SubNav />
    </>
  );
};

const NavBg = styled.header`
  position: relative;
  z-index: 1;
  background: ${col.primary};
  height: 20vh;
  min-height: 140px;
  .navContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    ${eightyVw.sizer};
    height: 100%;
    overflow: hidden;
    /* NAVCONT MEDIA QUERY */
    @media (max-width: 755px) {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const Logo = styled.div`
  align-self: flex-end;
  margin-top: 2rem;
  h2 a {
    font-weight: 700;
    color: ${col.white};
    span {
      color: ${col.pLight};
    }
  }
  /* LOGO MEDIA QUERY */
  @media (max-width: 755px) {
    align-self: auto;
  }
`;

const MainMenu = styled.nav`
  display: flex;
  width: 100%;
  padding-right: 1rem;
  /* border-top: 1px solid ${col.pLight};
  border-left: 1px solid ${col.pLight};
  border-right: 1px solid ${col.pLight}; */
  box-shadow: 0px -2px 1rem 0 rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 0;
  bottom: 0;
  /* MENULINKS STYLING (SEE COMPONENTS/MENU.JS) */
  ul {
    display: flex;
    width: 100%;
    align-items: space-between;
    li {
      display: inline-block;
    }
  }
  /* MAIN MENU MEDIA QUERY */
  @media (max-width: 755px) {
    box-shadow: none;
    border: none;
    width: auto;
    padding: 1rem;
    ul {
      display: none;
    }
  }
`;

export default Nav;
