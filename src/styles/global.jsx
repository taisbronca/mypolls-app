import { createGlobalStyle } from "styled-components";

export const devices = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "800px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const sizes = {
  xs: "375px",
  sm: "425px",
  md: "800px",
  lg: "1024px",
  xl: "1440px",
  xxl: "2560px",
};

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  *::-webkit-scrollbar-track {
    background: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #CCCCCC;
    border-radius: 20px;
    border: 3px solid #CCCCCC;
  }

  html {
    font-size: 62.5%
  }

  body {
    overflow: auto;
    font-size: 16px;
    font-family: 'Inter Tight', sans-serif;
    background-color: #F8F8F9;
  }

  body, input, textarea, button, select, span {
    font-family: 'Inter Tight', sans-serif;
  }
`;
