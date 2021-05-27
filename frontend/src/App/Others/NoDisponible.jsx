import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente que servía en un principio para mostrar cuando se hacía clic en un curso que tenía un estado diferente al de matrícula
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
