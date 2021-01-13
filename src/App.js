// REACT
import React from "react";

// PAGES
import Home from "./Pages/Home";
import Opinion from "./Pages/Opinion";
import Sport from "./Pages/Sport";
import Culture from "./Pages/Culture";
import Lifestyle from "./Pages/Lifestyle";

// COMPONENTS
import GlobalStyle from "./Components/GlobalStyled";
import Nav from "./Components/Nav/Nav";

// ROUTER
import { Switch, Route, useLocation } from "react-router-dom";

// STYLES
import "./Styles/App.scss";

// MATERIAL UI
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const location = useLocation();
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/commentisfree" exact>
          <Opinion />
        </Route>
        <Route path="/sport" exact>
          <Sport />
        </Route>
        <Route path="/culture" exact>
          <Culture />
        </Route>
        <Route path="/lifestyle" exact>
          <Lifestyle />
        </Route>
      </Switch>
    </>
  );
}

export default App;
