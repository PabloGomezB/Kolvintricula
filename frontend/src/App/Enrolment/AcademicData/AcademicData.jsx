import { Typography } from "@material-ui/core";
import { FieldArray } from "formik";
import React from "react";
import FormikControl from "../../FormFields/FormikControl";
import { useStyle } from "../../Layout/styles";

export const AcademicData = ({ cursmoduluf, values }) => {
  const classes = useStyle();
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Datos academicos
      </Typography>
      <FieldArray name="academic_data.moduluf">
        <div>
          <div>
            <FormikControl
              fullWidth
              control="select"
              label="Curso académico"
              name="academic_data.year"
              options={[
                { label: "1er Curso", value: 1 },
                { label: "2ndo Curso", value: 2 },
              ]}
            />
          </div>
          <div>
            {values.academic_data.year === 1 || values.academic_data.year === 2
              ? cursmoduluf[values.academic_data.year - 1].modules.map(
                  (modul, index) => {
                    return (
                      <div key={modul.name}>
                        <div className={classes.paddingTop}>{modul.name}</div>

                        <div>
                          {modul.ufs.map((uf) => {
                            return (
                              <React.Fragment key={`${modul.name}${uf.name}`}>
                                <FormikControl
                                  control="checkbox"
                                  name={`academic_data.modules[${index}].${modul.name}.${modul.name}${uf.name}`}
                                  label={uf.name}
                                />
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                )
              : null}
          </div>
        </div>
      </FieldArray>
    </div>
  );
};

export default AcademicData;
