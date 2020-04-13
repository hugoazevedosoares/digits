import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body,
html {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    height: 100vh;
    width: 100vw;
    font-size: 16px;
}

ul {
    list-style: none;
}

a {
    color: #9acd91;
    text-decoration: none;
}

#root {
    height: 100%;
    width: 100%;
    background-color: #00b7b8;
    background-image: linear-gradient(to right top, #845ec2, #0086e6, #00a3e0, #00b7b8, #35c486);
}
`;

export const AppContainer = styled.div`
  padding: 4.16% 8.33%;
`;

export const MainTitle = styled.h1`
  margin: auto;
  text-align: center;
  text-decoration: none;
  margin-bottom: 2em;
`;

export const SubTitle = styled.h2`
  margin: auto;
  text-align: center;
  text-decoration: none;
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const MainContainer = styled.main`
  max-width: 730px;
  margin: auto;
`;

export const Input = styled.input`
  width: calc(100% - 32px);
  height: 2em;
  padding: 0.25em 16px;
  font-size: 18px;
  line-height: 1.3333333;
  letter-spacing: 0.1em;
  border-radius: 6px;
  border: none;
  text-align: center;
`;

export const Result = styled.h2`
  letter-spacing: 0.05em;
  text-align: center;
  padding-top: 1em;
`;
