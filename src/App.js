// REACT
import React, { useEffect } from "react";

//REDUX
import { useDispatch } from "react-redux";
import { stateChange, clearData } from "./Redux/Actions/authAction";

// FIREBASE
import { auth } from "./firebase";

// PAGES
import Home from "./Pages/Home";
import Opinion from "./Pages/Opinion";
import Sport from "./Pages/Sport";
import Culture from "./Pages/Culture";
import Lifestyle from "./Pages/Lifestyle";
import Account from "./Pages/Account";

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
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(clearData());
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch(stateChange(user));
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path={["/commentisfree/article/:id", "/commentisfree"]}>
          <Opinion />
        </Route>
        <Route path={["/sport/article/:id", "/sport"]}>
          <Sport />
        </Route>
        <Route path={["/culture/article/:id", "/culture"]}>
          <Culture />
        </Route>
        <Route path={["/lifestyle/article/:id", "/lifestyle"]}>
          <Lifestyle />
        </Route>
        <Route path={["/signup", "/login"]}>
          <Account />
        </Route>
        <Route path={["/article/:id", "/"]}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
