import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
/**
 * Componente que lista los ciclos
 * @param {Object[]} courses Lista de ciclos
 */
const CourseList = ({ courses }) => {
  let match = useRouteMatch();

  const listItems = courses.map((course) => (
    <Fragment key={course.id}>
      <Grid item xs={6}>
        <Button component={Link} to={`${match.url}${course.name}`} variant="contained" style={{ padding: '10px', textAlign: 'center', width: '200px', borderRadius: '10px', marginBottom: '50px', border: '5px solid #00aeef', color: 'black', backgroundColor: 'white' }}>
          {course.name}
        </Button>
      </Grid>
    </Fragment>
  ));
  return listItems;
};

CourseList.propTypes = {
  /** Array de cursos */
  courses: PropTypes.array.isRequired,
};
CourseList.defaultProps = {
  courses: [],
};
export default CourseList;
