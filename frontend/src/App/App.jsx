import React from "react";
import Menu from "./Menu";
import MaterialLayout from "./Layout/MaterialLayout";

/**
 * Componente padre que encapsula toda la aplicación.
 */
const App = () => {
  return (
    <MaterialLayout>
      <Menu />
    </MaterialLayout>
  );
};

export default App;
