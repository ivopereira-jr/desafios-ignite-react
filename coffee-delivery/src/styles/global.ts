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

  html {
    font-size: 100%;

    @media (max-width: 1024px) {
      font-size: 93.75%; // 1rem = 15px
    }

    @media (max-width: 768px) {
      font-size: 87.5%; // 1rem = 14px
    }
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  input {
    border: none;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: ${({ theme }) => theme.colors['brand-yellow']}
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

  @media (max-width: 1280px) {
    .container {
      padding: 0 1rem;
    }
  }
`;
