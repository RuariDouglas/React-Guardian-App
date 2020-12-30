// REACT
import React from "react";

// COMPONENTS
import GlobalStyle from "./Components/GlobalStyled";
import Nav from "./Components/Nav";

// STYLES
import "./Styles/App.scss";

import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
const font = "'Merriweather', serif;";
// theme
let theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Nav />
    </ThemeProvider>
  );
}

export default App;
