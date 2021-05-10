import React from "react";
import { Link, Route, Router, } from "react-router-dom";
import App from "../App";

const NoDisponible = () => {
    return (
        <React.Fragment>
            <h1>No disponible</h1>
            {/* <a href="/matriculas">Volver</a> */}
            <Link to="/matriculas">Volver</Link>
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