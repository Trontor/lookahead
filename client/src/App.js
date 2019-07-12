import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Planner from "./components/Planner";
import Header from "./components/Header";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.bodyBackground};
    font-family: "Karla", sans-serif;
    font-size: 12px;
    color: #373535;
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;
export default () => {
  const theme = useSelector(state => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Route path="/" exact component={Planner} />
      </Router>
    </ThemeProvider>
  );
};
