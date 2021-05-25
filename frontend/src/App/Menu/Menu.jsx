import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import EnrolmentList from "./EnrolmentList";
/**
 * Componente que usa Router y crea la lista de ciclos que hay disponibles
 */
export const Menu = () => {
  return (
    <Router>
      <Route path="/">
        <EnrolmentList />
      </Route>
    </Router>
  );
};

export default Menu;
