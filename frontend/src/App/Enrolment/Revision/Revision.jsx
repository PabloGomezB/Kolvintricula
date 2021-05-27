
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useFormikContext } from "formik";
/**
 * Componente que construye el paso de Revision
 * @param {*} param0
 * @returns
 */
export default function Revision() {
  //Sirve para poder acceder al valor del JSON que está en Enrolment.jsx
  const { values } = useFormikContext();

  //Contiene toda la información que el alumno ha ido rellenando y dicha información se enviará en Enrolment.jsx
  return (
    <div>
      <div>
        <Typography variant="h4" gutterBottom>
          Datos del alumno
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ListItem>
              <ListItemText primary="Nombre" secondary={values.student.name} />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ListItem>
              <ListItemText
                primary="Primer apellido"
                secondary={values.student.last_name1}
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ListItem>
              <ListItemText
                primary="Segundo apellido"
                secondary={values.student.last_name2}
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ListItem>
              <ListItemText
                primary="Fecha de nacimiento"
                secondary={moment(values.student.date_birth).format('D/MM/YYYY')}
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ListItem>
              <ListItemText
                primary="Email"
                secondary={values.student.email_personal}
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ListItem>
              <ListItemText primary="NIF" secondary={values.student.nif} />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ListItem>
              <ListItemText
                primary="Nº movil"
                secondary={values.student.mobile_number}
              />
            </ListItem>
          </Grid>
        </Grid>
      </div>
      {values.custodians.length !== 0 &&
        moment().diff(values.student.date_birth, "years") < 18 && (
          <div>
            <Typography variant="h4" gutterBottom>
              Datos de los responsables
            </Typography>
            <Grid container spacing={3}>
              {values.custodians.map((custodian, index) => {
                return (
                  <Grid item xs={12} sm={6}>
                    <List>
                      <ListItem>
                        <ListItemText primary={`Responsable  ${index + 1}`} />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Tipo"
                          secondary={custodian.type}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="NIF" secondary={custodian.nif} />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Nombre"
                          secondary={custodian.name}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Primer apellido"
                          secondary={custodian.last_name1}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Segundo apellido"
                          secondary={custodian.last_name2}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Nº movil"
                          secondary={custodian.mobile_number}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Email"
                          secondary={custodian.email}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}
      <div>
        <Typography variant="h4" gutterBottom>
          Datos académicos
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Curso"
              secondary={values.academic_data.year}
            />
          </ListItem>
          {Object.keys(values.academic_data.modules).map((key, index) => {
            return (
              values.academic_data.modules[key].length !== 0 && (
                <ListItem>
                  <ListItemText
                    primary={key}
                    secondary={values.academic_data.modules[key].join(", ")}
                  />
                </ListItem>
              )
            );
          })}
        </List>
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          Consentimiento
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Enfermedades"
              secondary={values.consent.enfermedades}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Alergias"
              secondary={values.consent.alergias}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Medicamentos"
              secondary={values.consent.medicamentos}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Otros" secondary={values.consent.otros} />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
