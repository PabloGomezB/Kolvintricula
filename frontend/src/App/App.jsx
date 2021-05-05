import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoDisponible from "./Componentes/NoDisponible";
import Matricula from "./Matricula";
const App = () => {
  let json = {
    matricula: true,
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
            {json.matricula ? <Matricula /> : <NoDisponible />}
          </Route>
          <Route path="/daw">
            {json.matricula ? <Matricula /> : <NoDisponible />}
          </Route>
          <Route path="/asix">
            {json.matricula ? <Matricula /> : <NoDisponible />}
          </Route>
          <Route path="/smx">
            {json.matricula ? <Matricula /> : <NoDisponible />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
