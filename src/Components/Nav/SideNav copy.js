// REACT
import React from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import MenuLinks from "./MenuLinks";
import AccountLinks from "./AccountLinks";

// STYLES
import styled from "styled-components";
import { col } from "../../Styles/Styles";

// MATERIAL UI
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SideNav = () => {
  const menuToggle = useSelector((state) => state.menuToggle);
  const dispatch = useDispatch();
  return (
    <div className={`${menuToggle ? "shown" : "hide"}`}>
      <div className="sidenav__container">
        <div className="sidenav__menu">
          <div className="account-links">
            <AccountLinks />
          </div>
          <div className="menu-links">
            <MenuLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
