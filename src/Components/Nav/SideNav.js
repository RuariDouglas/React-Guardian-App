// REACT
import React from "react";
import { Link } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import MenuLinks from "./MenuLinks";
import AccountLinks from "./AccountLinks";

// MATERIAL UI
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";

const SideNav = () => {
  const menuToggle = useSelector((state) => state.menuToggle);
  const dispatch = useDispatch();
  return (
    <div className={`${menuToggle ? "shown" : "hide"}`}>
      <div className="sidenav__container">
        <CloseIcon
          className="side-icon"
          onClick={() => dispatch({ type: "SIDE_NAV_TOGGLE" })}
        />
        <div className="nav__support-links">
          <h4>Support us in 2021</h4>
          <p>Power vital, open, independent journalism</p>
          <div className="support-links__wrapper">
            <Link className="support-link">
              Subscribe <ArrowForwardIcon className="forward-icon" />
            </Link>
            <Link className="support-link">
              Contribute <ArrowForwardIcon className="forward-icon" />
            </Link>
          </div>
        </div>
        <div className="sidenav__menu">
          <div className="menu-links">
            <MenuLinks />
          </div>
          <div className="account-links">
            <AccountLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
