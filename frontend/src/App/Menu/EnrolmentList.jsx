import {
  Button,
  Container,
  Snackbar,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Enrolment from "../Enrolment";
import NoDisponible from "../Others/NoDisponible";
import CourseList from "./CourseList";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyle } from "../Layout/styles";
import { Alert } from "@material-ui/lab";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

/**
 * Lista de matriculas por ciclo disponibles.
 */
const EnrolmentList = () => {
  //Declaración de los estados y los estilos
  const [courseArray, setCourseArray] = useState([]);
  const [studentData, setStudentData] = useState(0);
  const [datosEncontrados, setDatosEncontrados] = useState(0);
  const [showAlert, setShowAlert] = useState(0);
  const [resetNif, setResetNif] = useState(0);
  const [open, setOpen] = useState(false);
  const [loadingBTN, setLoadingBTN] = useState(true);
  const classes = useStyle();

  //Variable que permite obtener la ruta actual
  let match = useRouteMatch();

  /**
   * Obtener cursos para crear botones y rutas
   */
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/courses`)
      .then((response) => {
        setCourseArray(response.data);
        setLoadingBTN(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /**
   * Obtener datos existentes del estudiante y mostrar alertas
   */
  const searchStudent = () => {
    setResetNif(false);
    let nifToSearch = document.getElementById("nif_field").value;
    axios
      .get(`${process.env.REACT_APP_API}/api/student/${nifToSearch}`)
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
  };

  /**
   * Resetea del NIF
   */
  function resetNifData() {
    setShowAlert(true);
    setResetNif(true);
    setStudentData(0);
    document.getElementById("nif_field").value = "";
  }

  /**
   * Cerrar alerta
   */
  const closeAlert = () => {
    setShowAlert(false);
    setResetNif(false);
  };

  //Funciones pare abrir y cerrar el popup que permite cargar los datos del alumno
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Switch>
      {/* Lógica que hace posible la navegación por rutas dependiendo del estado del curso */}
      {courseArray.map((course) => (
        <Route path={`${match.path}${course.name}`} key={course.id}>
          {course.state === "MATRICULA" ? (
            <Enrolment studentData={studentData} courseData={course} />
          ) : (
            <NoDisponible />
          )}
        </Route>
      ))}
      <>
        <Container maxWidth="xl" className={classes.mainContainer}>
          <Typography variant="h3" align="center" gutterBottom>
            Nuestros Cursos
          </Typography>
          <div className={`${classes.divEnrolList}`}>
            {/* Spinner antes de que carguen la lista de cursos */}
            {loadingBTN ? (
              <div className={classes.loading}>
                <CircularProgress />
              </div>
            ) : (
              //Lista de cursos
              <Grid container align="center" spacing={2}>
                <CourseList courses={courseArray}></CourseList>
              </Grid>
            )}
          </div>
          <div className={`${classes.alignCenter} ${classes.marginTop}`}>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              className={classes.btnEnrolList}
            >
              ¿Quieres cargar tus datos?
            </Button>
          </div>

          <Container align="center">
            {/* Popup que se ejecuta cuando le clicas al botón de cargar datos */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="form-dialog-title">Introduce tu NIF</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  id="nif_field"
                  label="NIF"
                  variant="outlined"
                  className={classes.textFieldNIF}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button onClick={searchStudent} color="primary">
                  Cargar datos
                </Button>
                <IconButton aria-label="delete" onClick={resetNifData}>
                  <DeleteIcon />
                </IconButton>
              </DialogActions>
            </Dialog>
            {/* Alertas que se muestran dependiendo de la acción del alumno */}
            {showAlert ? (
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={showAlert}
                autoHideDuration={3000}
                onClose={closeAlert}
              >
                {resetNif ? (
                  <Alert
                    onClose={closeAlert}
                    variant="filled"
                    severity="success"
                  >
                    Datos reestablecidos!
                  </Alert>
                ) : datosEncontrados ? (
                  <Alert
                    onClose={closeAlert}
                    variant="filled"
                    severity="success"
                  >
                    Se han cargado tus datos!
                  </Alert>
                ) : (
                  <Alert onClose={closeAlert} variant="filled" severity="error">
                    No tienes matrículas previas
                  </Alert>
                )}
              </Snackbar>
            ) : null}
          </Container>
        </Container>
      </>
    </Switch>
  );
};

export default EnrolmentList;
