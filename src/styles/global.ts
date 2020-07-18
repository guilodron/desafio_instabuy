import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    background-color: #F0F0F5;
  }

  body {
    font-family: 'Roboto', serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }
`;
