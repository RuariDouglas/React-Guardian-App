// REACT
import React from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS
import MenuLinks from "./MenuLinks";

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
`;

export default SideNav;
