// REACT & MISC
import React from "react";
import { Link } from "react-router-dom";
import { checkUser } from "../../Functions";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/authAction";

// COMPONENTS
import SideNav from "./SideNav";
import MenuLinks from "./MenuLinks";

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
  const { currentUser, userLoading } = useSelector(
    (state) => state.currentUser
  );

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

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
          <AccountList>
            <li className={checkUser("loggedOut", currentUser, userLoading)}>
              <Link to="/signup">SignUp</Link>
            </li>
            <li className={checkUser("loggedOut", currentUser, userLoading)}>
              <Link to="/login">Login</Link>
            </li>

            <li className={checkUser("loggedIn", currentUser, userLoading)}>
              <Link onClick={logoutHandler} to="/">
                Logout
              </Link>
            </li>
            <li className={checkUser("loggedIn", currentUser, userLoading)}>
              {/* <p>Signed In as: {currentUser.email}</p> */}
            </li>
          </AccountList>
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
  @media (min-width: 1200px) {
    .navContainer {
      width: 80vw;
    }
  }
`;

const Logo = styled.div`
  align-self: flex-end;
  font-size: 3rem;
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

const AccountList = styled.ul`
  display: flex;
  align-self: flex-end;
  li {
    display: none;
  }
  .liShown {
    display: inline;
  }
  a {
    color: #fff;
    text-decoration: underline;
    padding: 0.5rem 1rem;
  }
`;

export default Nav;
