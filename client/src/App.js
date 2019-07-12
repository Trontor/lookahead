import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Planner from "./components/Planner";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

export default () => {
  const theme = useSelector(state => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Route path="/" exact component={Planner} />
      </Router>
    </ThemeProvider>
  );
};
