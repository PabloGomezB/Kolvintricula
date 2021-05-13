import { Typography } from "@material-ui/core";
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
                    <FormikControl
                      control="input"
                      type="text"
                      label="NIF: "
                      name={`custodians[${index}].nif`}
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Nombre: "
                      name={`custodians[${index}].name`}
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Primer apellido: "
                      name={`custodians[${index}].last_name1`}
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Segundo apellido: "
                      name={`custodians[${index}].last_name2`}
                    />
                    <FormikControl
                      control="input"
                      type="number"
                      label="Telefono movil: "
                      name={`custodians[${index}].mobile_number`}
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      label="Email: "
                      name={`custodians[${index}].email`}
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)} // remove a friend from the list
                    >
                      -
                    </button>
                  </div>
                ))}
              {custodians.length < 2 && (
                <button type="button" onClick={() => push(new CustodianO())}>
                  Añadir un responsable
                </button>
              )}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default Custodian;
