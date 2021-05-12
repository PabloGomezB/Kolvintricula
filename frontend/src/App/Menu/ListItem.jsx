import { Button } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const ListItem = ({ courseValue }) => {
  let match = useRouteMatch();

  return (
    <Button variant="contained" id="courseButton">
      <Link className="courseName" to={`${match.url}/${courseValue.name}`}>
        {courseValue.name}
      </Link>
    </Button>
  );
};

export default ListItem;
