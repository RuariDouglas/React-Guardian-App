// REACT
import React from "react";

// PAGES
import Home from "./Pages/Home";
import Opinion from "./Pages/Opinion";

// COMPONENTS
import GlobalStyle from "./Components/GlobalStyled";
import Nav from "./Components/Nav/Nav";

// ROUTER
import { Switch, Route, useLocation } from "react-router-dom";

// STYLES
import "./Styles/App.scss";

// MATERIAL UI
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
const font = "'Merriweather', serif;";

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/opinion" exact>
          <Opinion />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
