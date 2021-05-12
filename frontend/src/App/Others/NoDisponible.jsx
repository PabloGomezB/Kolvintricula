import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const NoDisponible = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <React.Fragment>
      <h1>No disponible</h1>
      <Button color="primary" onClick={goBack}>
        Volver
      </Button>
    </React.Fragment>
  );
};
export default NoDisponible;
