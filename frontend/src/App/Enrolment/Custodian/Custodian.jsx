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

/**
 * Componente que construye el paso de Responsables
 * @returns
 */
export const Custodian = () => {
  //Declaración de los estilos
  const classes = useStyle();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Datos de la/s persona/s responsable/s
      </Typography>

      {/* Muestra los campos del formulario de los responsables y se puede tanto añadir responsables como eliminarlos */}
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
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormikControl
                          control="select"
                          fullWidth
                          label="Persona responsable"
                          name={`custodians[${index}].type`}
                          options={[
                            { label: "Padre", value: "PADRE" },
                            { label: "Madre", value: "MADRE" },
                            { label: "Tutor/a legal", value: "TUTOR" },
                          ]}
                        />
                      </Grid>
                      {custodians.length !== 1 && (
                        <Grid item xs={12} sm={6}>
                          <Button
                            className={classes.removeCustodian}
                            variant="contained"
                            color="primary"
                            onClick={() => remove(index)}
                          >
                            Eliminar responsable
                          </Button>
                        </Grid>
                      )}

                      <Grid item xs={12} sm={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="NIF o NIE: "
                          name={`custodians[${index}].nif`}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Nombre: "
                          name={`custodians[${index}].name`}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Primer apellido: "
                          name={`custodians[${index}].last_name1`}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Segundo apellido: "
                          name={`custodians[${index}].last_name2`}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormikControl
                          control="input"
                          type="number"
                          label="Telefono movil: "
                          name={`custodians[${index}].mobile_number`}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Email: "
                          name={`custodians[${index}].email`}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6}></Grid>
                    </Grid>
                  </div>
                ))}
              {custodians.length < 2 && (
                <Button
                  className={classes.addCustodian}
                  variant="contained"
                  color="primary"
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
