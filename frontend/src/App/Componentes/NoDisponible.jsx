import React from "react";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

const NoDisponible = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/matriculas");
    }

    return (
        <React.Fragment>
            <h1>No disponible</h1>
            {/* <a href="/matriculas">Volver</a> */}
            {/* <Link to="/matriculas">Volver</Link> */}
            <Button color="primary" onClick={handleClick}>
                Volver
            </Button>
            {/* <Router>
                <div>
                <Route path="/matriculas">
                    <App />
                </Route>
                </div>
            </Router> */}
        </React.Fragment>
    )
};
export default NoDisponible;