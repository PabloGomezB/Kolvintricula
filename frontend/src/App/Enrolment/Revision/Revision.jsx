import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";

export default function Revision({ values }) {
  return (
    <div>
      <div>
        <Typography variant="h4" gutterBottom>
          Datos alumno
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
                secondary={values.student.date_birth}
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
    </div>
  );
}
