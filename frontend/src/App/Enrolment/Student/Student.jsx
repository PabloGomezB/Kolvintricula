import { Grid, Typography } from "@material-ui/core";
import React from "react";
import FormikControl from "../../FormFields/FormikControl";

export const Student = (props) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Datos del alumno
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="text"
            label="Primer nombre: "
            name="student.name"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="text"
            label="Primer apellido: "
            name="student.last_name1"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="text"
            label="Segundo apellido: "
            name="student.last_name2"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          { props.nif.length === 0 ? (
            <FormikControl
              control="input"
              type="text"
              label="NIF: "
              name="student.nif"
              fullWidth
            />
          ) : (
            <FormikControl
              control="input"
              type="text"
              label="NIF: "
              name="student.nif"
              fullWidth
              disabled
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="email"
            label="Email: "
            name="student.email_personal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="input"
            type="number"
            label="Movil: "
            name="student.mobile_number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikControl
            control="date"
            label="Fecha de nacimiento: "
            name="student.date_birth"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Student;
