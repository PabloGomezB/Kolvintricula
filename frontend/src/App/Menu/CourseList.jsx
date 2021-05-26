import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import { useStyle } from "../Layout/styles";
import PropTypes from "prop-types";

/**
 * Componente que lista los ciclos
 * @param {Object[]} courses Lista de ciclos
 */
const CourseList = ({ courses }) => {
  let match = useRouteMatch();
  const classes = useStyle();

  const listItems = courses.map((course) => (
    <Fragment key={course.id}>
      <Grid item xs={12} sm={6}>
        {course.state !== "MATRICULA" ? (
          <Button
            component={Link}
            to={`${match.url}${course.name}`}
            className={`${classes.btnEnrolList}  ${classes.btnDisabled}`}
            variant="contained"
            disabled
            size="large"
          >
            {course.name}
          </Button>
        ) : (
          <Button
            component={Link}
            to={`${match.url}${course.name}`}
            variant="contained"
            color="primary"
            size="large"
            className={`${classes.btnEnrolList}`}
          >
            {course.name}
          </Button>
        )}
      </Grid>
    </Fragment>
  ));
  return listItems;
};

CourseList.propTypes = {
  /** Array de cursos */
  courses: PropTypes.array.isRequired,
};

export default CourseList;
