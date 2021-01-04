import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    vertical-align: baseline;
    font-family: 'Merriweather', serif;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
a {
    text-decoration: none;
}
textarea:focus, input:focus{
    outline: none;
    border: none;
}
`;

export default GlobalStyle;
