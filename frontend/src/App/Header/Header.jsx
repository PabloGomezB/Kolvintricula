import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyle } from "../Layout/styles";

/**
 * Componente que construye el Header
 * @param {*} param0
 * @returns
 */
export default function Header() {
  const classes = useStyle();

  return (
    <AppBar position="static">
      <Container className={classes.containerHeader}>
        <Typography variant="h6" component="h1" className={classes.floatLeft}>
          Kolvintricula
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          className={classes.floatRight}
        >
          Inicio
        </Button>
      </Container>
    </AppBar>
  );
}
