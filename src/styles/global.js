import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
  }
  body {
   color: ${(props) => props.theme.black};
  }
  body, input, textarea, button {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
