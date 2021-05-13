import { FormGroup, Typography } from "@material-ui/core";
import { FieldArray } from "formik";
import React from "react";
import FormikControl from "../../FormFields/FormikControl";

export const AcademicData = ({ cursmoduluf, values }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Datos academicos
      </Typography>
      <FieldArray name="academic_data.moduluf">
        <div>
          <div>
            <FormikControl
              control="select"
              label=""
              name="academic_data.course"
              options={[
                { label: "Elige una opcion", value: null },
                { label: "1er Curso", value: 1 },
                { label: "2ndo Curso", value: 2 },
              ]}
            />
          </div>

          {values.academic_data.course === 1 ||
          values.academic_data.course === 2
            ? cursmoduluf[values.academic_data.course - 1].moduls.map(
                (modul, index) => {
                  return (
                    <div key={modul.modul_key}>
                      <Typography variant="body1" gutterBottom>
                        {modul.name}
                      </Typography>

                      <FormGroup>
                        {modul.ufs.map((uf) => {
                          return (
                            <React.Fragment key={uf.uf_key}>
                              <FormikControl
                                control="checkbox"
                                name={`academic_data.moduluf[${index}].${modul.modul_key}.${uf.uf_key}`}
                                label={uf.name}
                              />
                            </React.Fragment>
                          );
                        })}
                      </FormGroup>
                    </div>
                  );
                }
              )
            : null}
        </div>
      </FieldArray>
    </div>
  );
};

export default AcademicData;
