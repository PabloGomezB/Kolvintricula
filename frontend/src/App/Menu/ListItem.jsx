import { Button } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const ListItem = ({ courseValue }) => {
  let match = useRouteMatch();

  return (
    <ul>
      <Button component={ Link } to={`${match.url}${courseValue.name}`} variant="outlined" style={{marginBottom: '10px', borderRadius: '10px', textAlign: 'center', marginLeft: '-25px'}}>
        {courseValue.name}
      </Button>
    </ul>
  );
};

export default ListItem;
