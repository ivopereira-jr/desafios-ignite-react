import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors['base-text']};
    background: ${({ theme }) => theme.colors['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
  }

  .flexAlignCenter {
    display: flex;
    align-items: center;
  }
`;
