import PropTypes from "prop-types";
import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Footer from "../Footer";

import { theme, useStyle } from "./styles";
import Header from "../Header";

/**
 * Componente que que añade el tema de material al componente children.
 */
export default function MaterialLayout({ children }) {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

MaterialLayout.propTypes = {
  /** Componente que será hijo */
  children: PropTypes.any,
};
