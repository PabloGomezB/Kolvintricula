import React, { useEffect, useState } from "react";
import './App.css';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Enrolment from "./Enrolment";
import NoDisponible from "./Componentes/NoDisponible";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import axios from "axios";
import { Container } from "@material-ui/core";

const ListItem = ({ courseValue }) => {
  let match = useRouteMatch();

  // function hideCourses(e) {
  //   e.preventDefault();
  //   let courses = document.getElementById("cursos");
  //   courses.style.display = "none";
  // }

  const hideCourses = () => {
    console.log('funciona');
    let courses = document.getElementById("courses");
    courses.style.display = "none";
  }

  return (
    <Button variant="contained" id="courseButton" onClick={hideCourses}>
      <Link className="courseName" to={`${match.url}/${courseValue.name}`}>{courseValue.name}</Link>
    </Button>
  );
};

const CourseList = ({ courses }) => {
  const listItems = courses.map((course) => (
    <ListItem key={course.id} courseValue={course} />
  ));

  return listItems;
};

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
    <div>
      <Container maxWidth="sm" id="courses">
        <CourseList courses={courseArray}></CourseList>
      </Container>
      <Switch>
        {courseArray.map((course) => (
          <Route path={`${match.path}/${course.name}`} key={course.id}>
            {course.state === "MATRICULA" ? (<Enrolment />) : <NoDisponible />}
          </Route>
        ))}
      </Switch>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/matriculas">
          <EnrolmentList />
        </Route>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
