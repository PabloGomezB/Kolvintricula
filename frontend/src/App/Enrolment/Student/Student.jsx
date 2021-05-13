import { Typography } from "@material-ui/core";
import React from "react";
import FormikControl from "../../FormFields/FormikControl";

export const Student = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Datos del alumno
      </Typography>
      <FormikControl
        control="input"
        type="text"
        label="Primer nombre: "
        name="student.name"
      />
      <FormikControl
        control="input"
        type="text"
        label="Primer apellido: "
        name="student.last_name1"
      />
      <FormikControl
        control="input"
        type="text"
        label="Segundo apellido: "
        name="student.last_name2"
      />
      <FormikControl
        control="input"
        type="text"
        label="NIF: "
        name="student.nif"
      />
      <FormikControl
        control="input"
        type="email"
        label="Email: "
        name="student.email"
      />
      <FormikControl
        control="input"
        type="number"
        label="Movil: "
        name="student.mobile_number"
      />
      <FormikControl
        control="date"
        label="Fecha de nacimiento: "
        name="student.date_birth"
      />
    </div>
  );
};
export default Student;
