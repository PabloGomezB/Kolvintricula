import React, { useEffect, useState } from "react";
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

const ListItem = ({ courseValue }) => {
  let match = useRouteMatch();

  return (
    <li>
      <Link to={`${match.url}/${courseValue.name}`}>{courseValue.name}</Link>
    </li>
  );
};

const CourseList = ({ courses }) => {
  const listItems = courses.map((course) => (
    <ListItem key={course.id} courseValue={course} />
  ));

  return <ul>{listItems}</ul>;
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
      <CourseList courses={courseArray}></CourseList>
      <Switch>
        {courseArray.map((course) => (
          <Route path={`${match.path}/${course.name}`} key={course.id}>
            {course.state === "MATRICULA" ? <Enrolment /> : <NoDisponible />}
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
        <Link to="/matriculas">Lista de matriculas</Link>

        <Route path="/matriculas">
          <EnrolmentList />
        </Route>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
