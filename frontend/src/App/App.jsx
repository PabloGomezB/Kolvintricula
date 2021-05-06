import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Enrolment from "./Enrolment";
import NoDisponible from "./Componentes/NoDisponible";
import data from "./course_list_sample";

const ListItem = ({ courseValue }) => {
  return (
    <li>
      <button>
        <Link to={`/${courseValue.name}`}>{courseValue.name}</Link>
      </button>
    </li>
  );
};

const CourseList = ({ courses }) => {
  const listItems = courses.map((course) => (
    <ListItem key={course.id} courseValue={course} />
  ));

  return <ul>{listItems}</ul>;
};

const App = () => {
  const [courseArray, setCourseArray] = useState([]);

  useEffect(() => {
    console.log(data);
    setCourseArray(data);
  }, []);

  return (
    <Router>
      <div>
        <CourseList courses={courseArray}></CourseList>

        <Switch>
          {courseArray.map((course) => (
            <Route path={`/${course.name}`}>
              {course.state === "HABILITADO" ? <Enrolment /> : <NoDisponible />}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
