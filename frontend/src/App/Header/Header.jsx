import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link, Route, Router } from "react-router-dom";
import { Button } from "@material-ui/core";
/**
 * Componente que construye el Header
 * @param {*} param0
 * @returns
 */
export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6" component="h1">
            Kolvintricula
          </Typography>
        </Container>
        <Button variant="contained">
          Inicio
        </Button>
      </Toolbar>
    </AppBar>
  );
}
