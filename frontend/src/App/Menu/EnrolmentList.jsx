import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Enrolment from "../Enrolment";
import NoDisponible from "../Others/NoDisponible";
import CourseList from "./CourseList";

const EnrolmentList = () => {
  const [courseArray, setCourseArray] = useState([]);
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

  return (
    <Switch>
      {courseArray.map((course) => (
        <Route path={`${match.path}${course.name}`} key={course.id}>
          {course.state === "MATRICULA" ? <Enrolment /> : <NoDisponible />}
        </Route>
      ))}
      <Container maxWidth="sm">
        <CourseList courses={courseArray}></CourseList>
      </Container>
    </Switch>
  );
};
export default EnrolmentList;
