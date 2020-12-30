import React, { useState } from "react";

// STYLES
import styled from "styled-components";
import { col } from "../Styles/Styles";

// MATERIAL UI
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// REDUX
import { useSelector, useDispatch } from "react-redux";

const SideNav = () => {
  const menuToggle = useSelector((state) => state.menuToggle);
  const dispatch = useDispatch();
  return (
    <div className={`${menuToggle ? "shown" : "hide"}`}>
      <SideNavContainer>
        <IconButton onClick={() => dispatch({ type: "TOGGLE" })}>
          <CloseIcon />
        </IconButton>
        <h1>Hello</h1>
      </SideNavContainer>
    </div>
  );
};

const SideNavContainer = styled.div`
  height: 100vh;
  width: 20rem;
  padding: 1rem;
  position: absolute;
  z-index: 9999;
  background-color: ${col.primary};
  box-shadow: 1rem 0 10rem #000;
  @media (max-width: 730px) {
    width: 100vw;
  }
`;

export default SideNav;
