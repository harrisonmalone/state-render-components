import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* initialize react router  */}
      <div>
        <nav>
          {/* navigation between different components */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <Switch>
          {/* defining routes with paths */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
