import { Grid, Typography } from "@material-ui/core";
import React from "react";
import FormikControl from "../../FormFields/FormikControl";

export const Student = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Datos del alumno
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="text"
            label="Primer nombre: "
            name="student.name"
          />
        </Grid>

        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="text"
            label="Primer apellido: "
            name="student.last_name1"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="text"
            label="Segundo apellido: "
            name="student.last_name2"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="text"
            label="NIF: "
            name="student.nif"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="email"
            label="Email: "
            name="student.email_personal"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="input"
            type="number"
            label="Movil: "
            name="student.mobile_number"
          />
        </Grid>
        <Grid item xs={6}>
          <FormikControl
            control="date"
            label="Fecha de nacimiento: "
            name="student.date_birth"
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Student;
