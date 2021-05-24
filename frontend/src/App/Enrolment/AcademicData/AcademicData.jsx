import { FormGroup, FormLabel, Typography } from "@material-ui/core";
import { FieldArray, useFormikContext } from "formik";
import React from "react";
import FormikControl from "../../FormFields/FormikControl";
import { CheckboxWithLabel } from "formik-material-ui";
import { useStyle } from "../../Layout/styles";
import PropTypes from "prop-types";
/**
 * Componente que construye el paso de Datos Académicos
 * @param {*} param0
 * @returns
 */

export const AcademicData = ({ cursmoduluf }) => {
  const { values } = useFormikContext();
  const classes = useStyle();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Datos académicos
      </Typography>
      <FieldArray name="academic_data.moduluf">
        <div>
          <div className={classes.academicData}>
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
                        {/* <div className={classes.paddingTop}>{modul.name}</div> */}
                        <FormLabel component="legend">
                          {modul.name}. {modul.description}
                        </FormLabel>

                        <FormGroup>
                          {modul.ufs.map((uf) => {
                            return (
                              <React.Fragment key={`${modul.name}${uf.name}`}>
                                <FormikControl
                                  control="checkbox"
                                  component={CheckboxWithLabel}
                                  name={`academic_data.modules.${modul.name} - ${modul.description}`}
                                  Label={{ label: uf.name }}
                                  value={uf.name}
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
        </div>
      </FieldArray>
    </div>
  );
};
AcademicData.propTypes = {
  /** Array de cursos con modulos y ufs */
  cursmoduluf: PropTypes.array.isRequired,
  /** Valores que Formik guarda */
  values: PropTypes.object.isRequired,
};

AcademicData.defaultProps = {
  cursmoduluf: [],
  values: {},
};
export default AcademicData;
