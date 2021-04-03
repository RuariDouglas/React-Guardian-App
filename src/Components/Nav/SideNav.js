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
          <h4>Support Ruari Douglas</h4>
          <p>Front-End developer available to work immediately</p>
          <div className="support-links__wrapper">
            <a
              className="support-link"
              href="https://drive.google.com/file/d/1_032i59LL2YuEzrqsB_xjjI0X5klaRYr/view"
              target="_blank"
            >
              View my CV <ArrowForwardIcon className="forward-icon" />
            </a>
            <a
              className="support-link"
              href="https://www.linkedin.com/in/ruari-douglas-82312271/"
              target="_blank"
            >
              My Linkedin <ArrowForwardIcon className="forward-icon" />
            </a>
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
