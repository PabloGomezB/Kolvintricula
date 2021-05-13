import { Typography } from "@material-ui/core";
import { FieldArray } from "formik";
import React from "react";
import FormikControl from "../../FormFields/FormikControl";

class CustodianO {
  constructor() {
    this.custodian = "";
    this.name_lastname = "";
    this.nif = "";
    this.mobile_number = "";
    this.email = "";
  }
}
export const Custodian = () => {
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
                      control="select"
                      label=""
                      name={`custodians[${index}].custodian`}
                      options={[
                        { label: "Elige una opción", value: null },
                        { label: "Padre", value: "padre" },
                        { label: "Madre", value: "madre" },
                        { label: "Tutor/a legal", value: "tutor" },
                      ]}
                    />

                    <FormikControl
                      control="input"
                      type="text"
                      label="Nombre y apellidos: "
                      name={`custodians[${index}].name_lastname`}
                    />

                    <FormikControl
                      control="input"
                      type="text"
                      label="NIF: "
                      name={`custodians[${index}].nif`}
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
