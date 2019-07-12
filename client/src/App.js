import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Planner from "./components/Planner";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

// Define what props.theme will look like
const theme = {
  main: "#4B55A5"
};

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Route path="/" exact component={Planner} />
      </Router>
    </ThemeProvider>
  );
};
