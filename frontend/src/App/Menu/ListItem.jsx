import { Button } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const ListItem = ({ courseValue }) => {
  let match = useRouteMatch();

  return (
    <Button component={ Link } to={`${match.url}${courseValue.name}`} variant="outlined" style={{margin: '10px'}}>
      {courseValue.name}
    </Button>
  );
};

export default ListItem;
