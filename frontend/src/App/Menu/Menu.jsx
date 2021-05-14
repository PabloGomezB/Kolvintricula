import { Container } from "@material-ui/core";
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import EnrolmentList from "./EnrolmentList";

export const Menu = () => {
  return (
    <Router>
      <Route path="/">
        {/* <Container> */}
        <EnrolmentList />
        {/* </Container> */}
      </Route>
    </Router>
  );
};

export default Menu;
