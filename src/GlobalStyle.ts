import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    background: #000;
    color: #FFF;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Inter, Helvetica, Sans-Serif;
    min-width: 320px;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
