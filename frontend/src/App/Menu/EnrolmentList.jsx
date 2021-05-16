import { Button, Container, Snackbar, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Enrolment from "../Enrolment";
import NoDisponible from "../Others/NoDisponible";
import CourseList from "./CourseList";
import Grid from '@material-ui/core/Grid';

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
  }

  const closeAlert = (event, reason) => {
    setShowAlert(false);
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
        <Container style={{ textAlign: 'center', display: 'grid', width: '420px'}}>
          <TextField id="nif_field" label="NIF" variant="outlined" style={{ marginBottom: '20px' }}/>
          <Button id="nif_button" onClick={searchStudent} variant="outlined" color="primary" style={{ borderRadius: '10px', backgroundColor: '#f2f2f2', padding: '10px' }}>Cargar datos</Button>
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