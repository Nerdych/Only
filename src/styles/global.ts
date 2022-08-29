import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
  }
`;
