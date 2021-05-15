import { Button, Grid, Typography } from "@material-ui/core";
import { FieldArray } from "formik";
import React from "react";
import FormikControl from "../../FormFields/FormikControl";
import { useStyle } from "../../Layout/styles";

class CustodianO {
  constructor() {
    this.type = "";
    this.nif = "";
    this.name = "";
    this.last_name1 = "";
    this.last_name2 = "";
    this.mobile_number = "";
    this.email = "";
  }
}
export const Custodian = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Datos de la/s persona/s responsable/s
      </Typography>
      <FieldArray name="custodians">
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { custodians } = values;
          return (
            <div>
              {custodians &&
                custodians.length > 0 &&
                custodians.map((custodiansItem, index) => (
                  <div key={index}>
                    <FormikControl
                      className={classes.formOptionInput}
                      control="select"
                      label="Persona responsable"
                      name={`custodians[${index}].type`}
                      options={[
                        { label: "Padre", value: "PADRE" },
                        { label: "Madre", value: "MADRE" },
                        { label: "Tutor/a legal", value: "TUTOR" },
                      ]}
                    />
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="NIF: "
                          name={`custodians[${index}].nif`}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Nombre: "
                          name={`custodians[${index}].name`}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Primer apellido: "
                          name={`custodians[${index}].last_name1`}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Segundo apellido: "
                          name={`custodians[${index}].last_name2`}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="number"
                          label="Telefono movil: "
                          name={`custodians[${index}].mobile_number`}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Email: "
                          name={`custodians[${index}].email`}
                        />
                      </Grid>
                      <Grid item xs={6}></Grid>
                    </Grid>

                    <Button variant="contained" onClick={() => remove(index)}>
                      -
                    </Button>
                  </div>
                ))}
              {custodians.length < 2 && (
                <Button
                  variant="contained"
                  onClick={() => push(new CustodianO())}
                >
                  Añadir un responsable
                </Button>
              )}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default Custodian;
