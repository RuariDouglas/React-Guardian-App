// REACT
import React from "react";

// PAGES
import Home from "./Pages/Home";

// COMPONENTS
import GlobalStyle from "./Components/GlobalStyled";
import Nav from "./Components/Nav/Nav";

// ROUTER
import { Switch, Route, useLocation } from "react-router-dom";

// STYLES
import "./Styles/App.scss";

// MATERIAL UI
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
const font = "'Merriweather', serif;";
// theme
let theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontFamily: "Helvetica, Arial, sans-serif",
    },
    subtitle2: {
      fontFamily: "Helvetica, Arial, sans-serif",
      color: "#646464",
      fontSize: 14,
    },
    fontFamily: font,
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />

      <Switch location={location} key={location.pathname}>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
