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
    dispatch(loadSearch(searchRef.current.value));
    history.push(`/search?=${searchRef.current.value}`);
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
              <h4>Support Ruari Douglas</h4>
              <p>Front-End developer available to work immediately</p>
              <div className="support-links__wrapper">
                <a
                  href="https://drive.google.com/file/d/1_032i59LL2YuEzrqsB_xjjI0X5klaRYr/view"
                  className="support-link"
                  target="_blank"
                >
                  View my CV <ArrowForwardIcon className="forward-icon" />
                </a>
                <a
                  to="https://www.linkedin.com/in/ruari-douglas-82312271/"
                  className="support-link"
                  target="_blank"
                >
                  My Linkedin <ArrowForwardIcon className="forward-icon" />
                </a>
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
