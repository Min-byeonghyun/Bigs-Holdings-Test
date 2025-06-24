import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', Arial, sans-serif;
    background: #f6f7fb;
    color: #222;
    min-height: 100vh;
  }
  button, input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
  }
  a { color: inherit; text-decoration: none; }
`;

export default GlobalStyle;
