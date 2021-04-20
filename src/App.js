import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import GithabState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";

const App = () => {
  return (
    <GithabState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />} />
                <Route component={NotFound} />} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithabState>
  );
};

export default App;
