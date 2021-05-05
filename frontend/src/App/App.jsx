import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Disponible from "./Componentes/Disponible";
import NoDisponible from "./Componentes/NoDisponible";
const App = () => {
    let json = {
        matricula: false
    };

    return (
        <Router>
            <div>
                <button>
                    <Link to="/dam">DAM</Link>
                </button>
                <button>
                    <Link to="/daw">DAW</Link>
                </button>
                <button>
                    <Link to="/asix">ASIX</Link>
                </button>
                <button>
                    <Link to="/smx">SMX</Link>
                </button>

                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/dam">
                        {json.matricula ? <Disponible/> : <NoDisponible/>} <h1>DAM</h1>
                    </Route>
                    <Route path="/daw">
                        {json.matricula ? <Disponible/> : <NoDisponible/>} <h1>DAW</h1>
                    </Route>
                    <Route path="/asix">
                        {json.matricula ? <Disponible/> : <NoDisponible/>} <h1>ASIX</h1>
                    </Route>
                    <Route path="/smx">
                        {json.matricula ? <Disponible/> : <NoDisponible/>} <h1>SMX</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
