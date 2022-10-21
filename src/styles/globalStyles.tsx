import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background: rgb(232,234,254);
    background: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.text};
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
  }

  h1 {
    margin: 0;
    font-size: 5rem;
    font-weight: 500;
  }
  h2 {
    margin: 0;
    font-size: 4rem;
    font-weight: 500;
  }
  h3 {
    margin: 0;
    font-size: 3rem;
    font-weight: 500;
  }
  h4 {
    margin: 0;
    font-size: 2rem;
    font-weight: 500;
  }
  h5 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
  h6 {
    margin: 0;
    font-size: 0.9rem;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 500;
  }

  p, i, b, a, label {
    margin: 0;
    font-size: 0.9rem;
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyles;
