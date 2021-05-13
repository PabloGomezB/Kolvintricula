import { Button, Container, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Enrolment from "../Enrolment";
import NoDisponible from "../Others/NoDisponible";
import CourseList from "./CourseList";

import { Alert } from '@material-ui/lab';

const EnrolmentList = () => {
  const [courseArray, setCourseArray] = useState([]);
  const [datosEncontrados, setDatosEncontrados] = useState(0); // PABLO
  const [checked, setChecked] = useState(0); // PABLO
  const [studentData, setStudentData] = useState(0);

  let match = useRouteMatch();

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


  // PABLO
  function searchStudent(){
    let nifToSearch = document.getElementById("nif_field").value;
    axios
      .get(
        `http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/api/student/${nifToSearch}`
      )
      .then((response) => {
        setChecked(true);
        if (response.data.length === 0){
          setDatosEncontrados(false);
        }
        else{
          setDatosEncontrados(true);
          console.log("datosUser:",response.data)
          setStudentData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
    });
  };
  // END PABLO


  return (
    <Switch>
      {courseArray.map((course) => (
        <Route path={`${match.path}/${course.name}`} key={course.id}>
          {course.state === "MATRICULA" ? <Enrolment studentData={studentData}/> : <NoDisponible />}
        </Route>
      ))}
      <Container maxWidth="sm">
        <CourseList courses={courseArray}></CourseList>
        <Container>
          <TextField id="nif_field" label="NIF" variant="outlined"/>
          <Button id="nif_button" onClick={()=>{ searchStudent() }} variant="outlined" color="primary">Cargar datos</Button>

          {/* PABLO */}
            {checked
              ? <> {datosEncontrados
                  ? <Alert variant="filled" severity="success">Usuario encontrado!</Alert>
                  :<Alert variant="filled" severity="error">No hay datos!</Alert>}
                </>
              : null
            }
          {/* END PABLO */}

        </Container>
      </Container>
    </Switch>
  );
};

// const searchStudent = () => {
//   let nifToSearch = document.getElementById("nif_field").value;
//   console.log(nifToSearch)
//   axios
//     .get(
//       `http://labs.iam.cat/~a18pabgombra/Kolvintricula/backend/public/api/student/${nifToSearch}`
//     )
//     .then((response) => {
//       if (response.data.length === 0){
//         console.log("NO HAY REGISTROS");
//       }
//       else{
//         console.log("User encontrado:", response.data[0].name);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//   });
// }

export default EnrolmentList;
