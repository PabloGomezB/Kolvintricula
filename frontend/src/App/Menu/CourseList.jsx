import React from "react";
import ListItem from "./ListItem";
const CourseList = ({ courses }) => {
  const listItems = courses.map((course) => (
    <ListItem key={course.id} courseValue={course} />
  ));

  return listItems;
};
export default CourseList;
