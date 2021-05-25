import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente se formulario no disponible
 * @returns
 */
const NoDisponible = () => {
  return (
    <React.Fragment>
      <h1>No Disponible</h1>
      <Link to="/">Volver</Link>
    </React.Fragment>
  );
};
export default NoDisponible;
