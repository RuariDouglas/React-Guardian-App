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
import { col } from "../../Styles/Styles";

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
          <MainMenu>
            <MenuLinks />
            <IconButton onClick={() => dispatch({ type: "SIDE_NAV_TOGGLE" })}>
              {!menuToggle ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </MainMenu>
          <Logo>
            <Typography variant="h2">
              <Link to="/">
                <span>the</span>guardian
              </Link>
            </Typography>
          </Logo>
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
  .navContainer {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 340px) {
    .navContainer {
      padding: 1rem 0;
    }
  }
  @media (min-width: 755px) {
    .navContainer {
      padding: 1rem 0 0;
      flex-direction: column-reverse;
    }
  }
  @media (min-width: 1300px) {
    .navContainer {
      width: 80vw;
    }
  }
`;

const Logo = styled.div`
  align-self: flex-end;
  h2 a {
    font-weight: 700;
    color: ${col.white};
    letter-spacing: -1px;
    font-family: Georgia, "Times New Roman", Times, serif;
    span {
      font-family: Georgia, "Times New Roman", Times, serif;
      color: ${col.pLight};
    }
  }
  @media (min-width: 755px) {
    margin-bottom: 1rem;
  }
`;
const MainMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  ul {
    display: none;
    li {
      border-right: 1px solid ${col.pLight};
    }
  }
  @media (min-width: 755px) {
    display: flex;
    align-self: flex-start;
    border: 1px solid ${col.pLight};
    width: 100%;
    ul {
      display: flex;
    }
    button {
      justify-self: flex-end;
      margin-right: 1rem;
    }
  }
`;

export default Nav;
