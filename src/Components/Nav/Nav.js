// REACT & MISC
import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { loadSearch } from "../../Redux/Actions/guardianSectionAction";

// COMPONENTS
import SideNav from "./SideNav";
import MenuLinks from "./MenuLinks";
import AccountLinks from "./AccountLinks";

// STYLES
import logo from "../../Images/logo.png";

// MATERIAL UI
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchRef = useRef();
  const menuToggle = useSelector((state) => state.menuToggle);
  const [searchToggle, setSearchToggle] = useState(false);

  const revealSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    history.push(`/search?=${searchRef.current.value}`);
    dispatch(loadSearch(searchRef.current.value));
    searchRef.current.value = "";
  };

  return (
    <>
      <SideNav />
      <div className="nav__bg">
        <div className="nav__container">
          {/* Account Links */}
          <div className="nav__account-links">
            <AccountLinks />
          </div>
          {/* Top Nav Section */}
          <div className="nav__top-wrapper">
            {/* Support Links */}
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
            {/* Logo */}
            <div className="nav__logo-wrapper">
              <Link to="/">
                <img src={logo} alt="The Guardian Logo" />
              </Link>
            </div>
          </div>

          {/* Bottom Nav Section */}
          <div className="nav__bottom-wrapper">
            <nav className="nav__menu-links">
              <MenuLinks />
            </nav>
            <div className="nav__misc-links">
              {/* Search the Guardian input */}
              <div className="nav__search-form-wrapper">
                <form onSubmit={searchHandler} className="nav__search-form">
                  <SearchIcon className="search-icon" />
                  <input
                    className="search-form__input"
                    ref={searchRef}
                    placeholder="Search the Guardian"
                    type="text"
                  />
                </form>
              </div>
              <div className="line"></div>
              {menuToggle ? (
                <CloseIcon
                  onClick={() => dispatch({ type: "SIDE_NAV_TOGGLE" })}
                  className="close-icon"
                />
              ) : (
                <MenuIcon
                  onClick={() => dispatch({ type: "SIDE_NAV_TOGGLE" })}
                  className="menu-icon"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
