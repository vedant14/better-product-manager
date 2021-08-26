import { createGlobalStyle } from "styled-components"

export const colors = {
  primaryBlack: "#000000",
  washedBlack: "#4A4A4A",
  primary: "#2D9CDB",
  white: "#FFF",
  backgroundColor: "#FFF2F2",
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    background-color: ${colors.backgroundColor}; 
    margin: 0;
    padding: 0;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }


  h1{
    font-family: 'Mulish', sans-serif;    
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 28px;
    color: ${colors.primaryBlack};
    @media screen and (min-width: 768px) {
      font-size: 48px;
      line-height: 46px;
    }
  }

  h2{
    font-family: 'Mulish', sans-serif;    
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 26px;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
  }

  h3{
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 30px;
    }
  }

  h4{    
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 20px;
    }
  }

  p, a, li {
    font-family: 'Mulish', sans-serif;
    color: ${colors.washedBlack};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  li{
    margin-bottom: 20px;
  }

  small{
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 16px;
    > a {
      font-size: 14px;
    }
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: ${colors.primary};
    &:hover {
      text-decoration: none; 
    }
  }

  button {
    background: ${colors.white};
    border: 1px solid ${colors.primary};
    cursor: pointer;
    padding: 10px 14px;
    color: ${colors.primary};
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    border-radius: 10px;
    margin: 5px 10px 5px 0px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      padding: 10px 20px;
      margin: 10px 30px 10px 0px;
    }
  }
  .active {
    background: ${colors.primary};
    color: ${colors.white};
  }
  .warning {
    color: red;
    margin-top: 200px;
    margin-bottom: 200px;
    text-transform: uppercase;
  }

  .question {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    @media screen and (min-width: 768px) {
      margin-top: 100px;
      margin-bottom: 100px;
    }
  }

  .gif-image{
    max-width: 100%;
    margin: 20px auto;
  }


  .Container {
    margin-left: 30px;
    margin-right: 30px;
    @media screen and (min-width: 768px) {
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (min-width: 1324px) {
      margin-left: 150px;
      margin-right: 150px;
    }
    @media screen and (min-width: 1920px) {
      max-width: 1600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

`
