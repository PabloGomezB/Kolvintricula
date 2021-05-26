import React from "react";
import Menu from "./Menu";
import MaterialLayout from "./Layout/MaterialLayout";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

/**
 * Componente padre que encapsula toda la aplicación.
 */
const App = () => {
  return (
    <Router>
      <Route path="/">
        <MaterialLayout>
          <Menu />
        </MaterialLayout>
      </Route>
    </Router>
  );
};

export default App;
