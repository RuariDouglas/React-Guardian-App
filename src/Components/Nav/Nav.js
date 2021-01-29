// REACT & MISC
import React from "react";
import { Link } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/authAction";

// COMPONENTS
import SideNav from "./SideNav";
import MenuLinks from "./MenuLinks";
import AccountLinks from "./AccountLinks";

// STYLES
import styled from "styled-components";
import { col } from "../../Styles/Styles";

// MATERIAL UI
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Nav = () => {
  const dispatch = useDispatch();
  const menuToggle = useSelector((state) => state.menuToggle);
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
            <h2>
              <Link to="/">
                <span>the</span>guardian
              </Link>
            </h2>
          </Logo>
          <div className="accountLinks">
            <AccountLinks />
          </div>
        </div>
      </NavBg>
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
    justify-content: flex-start;
    flex-direction: row-reverse;
    padding: 1rem;
    .accountLinks {
      display: none;
    }
  }
  @media (max-width: 340px) {
    .navContainer {
      padding: 1rem 0;
    }
  }
  @media (min-width: 755px) {
    .navContainer {
      padding: 0 0 0;
      flex-direction: column-reverse;
      justify-content: flex-start;
      .accountLinks {
        display: flex;
        align-self: flex-end;
        font-weight: bold;
        border-radius: 0 0 10px 10px;
        border-bottom: 1px solid ${col.pLight};
        border-left: 1px solid ${col.pLight};
        border-right: 1px solid ${col.pLight};
        font-size: 80%;
        ul {
          display: flex;
          width: 150px;
          justify-content: space-evenly;
          align-items: center;
          #accountName {
            svg {
              height: 25px;
              width: 25px;
              margin: 0.25rem;
            }
            p {
              font-weight: 300;
              color: ${col.pLight};
            }
          }
          a:hover {
            color: #fff;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .navContainer {
      width: 80vw;
      max-width: 1200px;
    }
  }
`;

const Logo = styled.div`
  font-size: 3rem;
  margin-right: 1rem;
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
    margin-right: 0;
    align-self: flex-end;
    display: flex;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 2.3rem;
    }
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
    border-radius: 10px 10px 0 0;
    border-top: 1px solid ${col.pLight};
    border-left: 1px solid ${col.pLight};
    border-right: 1px solid ${col.pLight};
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
