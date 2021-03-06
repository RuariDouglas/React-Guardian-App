// REACT
import React from "react";
import { Link } from "react-router-dom";
import { checkUser } from "../../Functions";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/authAction";

// STYLES
import { col, fontS } from "../../Styles/Styles";
import styled from "styled-components";
import { AccountCircle } from "@material-ui/icons";

const AccountLinks = () => {
  const dispatch = useDispatch();
  const menuToggle = useSelector((state) => state.menuToggle);
  const { currentUser, userLoading } = useSelector(
    (state) => state.currentUser
  );
  const closeMenu = (e) => {
    return menuToggle ? dispatch({ type: "SIDE_NAV_TOGGLE" }) : "";
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <AccountList currentUser={currentUser}>
      <li className={checkUser("loggedOut", currentUser, userLoading)}></li>
      <li className={checkUser("loggedOut", currentUser, userLoading)}>
        <Link onClick={closeMenu} to="/login">
          Login
        </Link>
      </li>

      {currentUser && !userLoading && (
        <>
          <li
            id="accountName"
            className={checkUser("loggedIn", currentUser, userLoading)}
          >
            <AccountCircle style={{ color: col.pLight }} />
            <p>
              Welcome: <strong>{currentUser.name}</strong>
            </p>
          </li>
          <li className={checkUser("loggedIn", currentUser, userLoading)}>
            <Link onClick={logoutHandler} to="/">
              Logout
            </Link>
          </li>
        </>
      )}
    </AccountList>
  );
};

const AccountList = styled.ul`
  /* display: flex;
  align-items: center;
  padding: ${(props) => (props.currentUser.email ? 0 : ".5rem")};
  li {
    display: none;
  }
  .liShown {
    display: inline;
    color: ${col.pLight};
    font-size: 1rem;
    a {
      text-decoration: none;
      color: ${col.pLight};
      font-family: "Archivo", sans-serif;
    }
  }
  #accountName {
    display: flex;
    align-items: center;
  } */
`;

export default AccountLinks;
