import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
    h1, h2, h3, h4, button, a{
      font-family: 'Orbitron', sans-serif !important;
      color: #fff;
    }
    body, div, a, p, span, ul, li, small, section {
      font-family: 'Montserrat', sans-serif;
      color: #fff;
    }
    #fancy-background p span {
      color: transparent;
    }
    `}
  />
);

export default GlobalStyles;
