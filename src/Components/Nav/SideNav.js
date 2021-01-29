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
      <SideNavContainer menuToggle={menuToggle}>
        <IconButton onClick={() => dispatch({ type: "SIDE_NAV_TOGGLE" })}>
          <CloseIcon />
        </IconButton>
        <SideMenu>
          <div className="accountLinks">
            <AccountLinks />
          </div>
          <MenuLinks />
        </SideMenu>
      </SideNavContainer>
    </div>
  );
};

const SideNavContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  position: fixed;
  overflow: hidden;

  z-index: 9999;
  background-color: ${col.primary};
  box-shadow: 1rem 0 10rem #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  button {
    align-self: flex-end;
  }
  @media (min-width: 730px) {
    width: 20rem;
  }
`;

const SideMenu = styled.nav`
  ul {
    li {
      border-bottom: 1px solid ${col.pLight};
    }
  }
  .accountLinks {
    display: flex;
    align-self: flex-end;
    padding: 0.5rem;
    font-weight: bold;
    border-bottom: 1px solid ${col.pLight};
    svg {
      height: 40px;
      width: 40px;
      margin-right: 0.25rem;
    }
    p {
      color: ${col.pLight};
    }
    ul {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      li {
        border-bottom: none;
        a:hover {
          color: #fff;
        }
      }
    }
  }
`;

export default SideNav;
