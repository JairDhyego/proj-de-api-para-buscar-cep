import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body, html, :root {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  font-family: 'Roboto', sans-serif;
}

:root{
  --colorPrimary: #D59422
}
`;
