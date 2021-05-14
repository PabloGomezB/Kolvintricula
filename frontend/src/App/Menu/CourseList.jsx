import React from "react";
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const CourseList = ({ courses }) => {
  let match = useRouteMatch();

  const listItems = courses.map((course) => (
    <Grid item xs={6}>
      <Button component={ Link } to={`${match.url}${course.name}`} variant="outlined" style={{padding: '10px',textAlign: 'center',color: 'black'}}>
        {course.name}
      </Button>
    </Grid>
    
  ));

  return listItems;
};

export default CourseList;
