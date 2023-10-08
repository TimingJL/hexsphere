import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    background: #FFF;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
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
