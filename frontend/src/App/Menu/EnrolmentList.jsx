import { Button, Container, Snackbar, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Enrolment from "../Enrolment";
import NoDisponible from "../Others/NoDisponible";
import CourseList from "./CourseList";
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Alert } from "@material-ui/lab";

const EnrolmentList = () => {
  const [courseArray, setCourseArray] = useState([]);
  const [studentData, setStudentData] = useState(0);
  const [datosEncontrados, setDatosEncontrados] = useState(0);
  const [showAlert, setShowAlert] = useState(0);

  let match = useRouteMatch();

  // Obtener cursos para crear botones y rutas
  useEffect(() => {
    axios
      .get(
        "http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/api/courses"
      )
      .then((response) => {
        console.log("Course", response.data);
        setCourseArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Obtener datos existentes del estudiante y mostrar alertas
  const searchStudent = () => {
    let nifToSearch = document.getElementById("nif_field").value;
    axios
      .get(
        `http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/api/student/${nifToSearch}`
      )
      .then((response) => {
        setShowAlert(true);
        if (response.data.length === 0) {
          setDatosEncontrados(false);
        } else {
          setDatosEncontrados(true);
          setStudentData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

      setOpen(false);
  }

  const closeAlert = (event, reason) => {
    setShowAlert(false);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Switch>
      {courseArray.map((course) => (
        <Route path={`${match.path}${course.name}`} key={course.id}>
          {course.state === "MATRICULA" ? (
            <Enrolment studentData={studentData} />
          ) : (
            <NoDisponible />
          )}
        </Route>
      ))}
      <Container maxWidth="sm" style={{ flexGrow: 1 }}>
        <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Lista de cursos</h1>
        <Grid container style={{ textAlign: 'center' }}>
          <CourseList courses={courseArray}></CourseList>
        </Grid>
        <Container style={{ textAlign: 'center' }}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ padding: '10px', borderRadius: '10px' }}>
            ¿Quieres cargar tus datos?
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="form-dialog-title">Introduce tu NIF</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
                Carga tus datos introduciendo tu NIF
              </DialogContentText> */}
              <TextField autoFocus id="nif_field" label="NIF" variant="outlined" style={{ marginBottom: '20px' }}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={searchStudent} color="primary">
                Cargar datos
              </Button>

            </DialogActions>
          </Dialog>
          {showAlert
            ? <Snackbar
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                open={showAlert} autoHideDuration={3000} onClose={closeAlert}>
                {datosEncontrados
                  ? <Alert onClose={closeAlert} variant="filled" severity="success">Se han cargado tus datos!</Alert>
                  : <Alert onClose={closeAlert} variant="filled" severity="error">No tienes matrículas previas</Alert>
                }
              </Snackbar>
            : null
          }
        </Container>
      </Container>
    </Switch>
  );
};

export default EnrolmentList;