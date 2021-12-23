import { useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { Router } from "react-router-dom";
import { history } from "./store";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  const state = useSelector((state) => state);
  console.log(`State : `, state);

  return (
    <>
      <Router history={history}>
        <nav
          style={{
            display: "flex",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <Link to={"/"}>Home</Link>
          </div>
          <div>
            <Link to={"/dashboard"}>Dashboard</Link>
          </div>
        </nav>
        <hr />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/dashboard"}>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
