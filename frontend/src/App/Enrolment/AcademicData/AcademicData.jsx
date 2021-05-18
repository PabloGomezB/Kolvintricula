import {
  Checkbox,
  FormGroup,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
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
              name="academic_data.course"
              options={[
                { label: "1er Curso", value: 1 },
                { label: "2ndo Curso", value: 2 },
              ]}
            />
          </div>
          <List dense>
            {values.academic_data.course === 1 ||
            values.academic_data.course === 2
              ? cursmoduluf[values.academic_data.course - 1].moduls.map(
                  (modul, index) => {
                    return (
                      <ListItem key={modul.modul_key}>
                        <ListItemText
                          primary={modul.name}
                          className={classes.dblock}
                        />

                        <ListItemSecondaryAction>
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
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  }
                )
              : null}
          </List>
        </div>
      </FieldArray>
    </div>
  );
};

export default AcademicData;
