import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./Components/CSS/index.css";

import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/SignInForm";

function App() {
  return (

    <Router>
    <div className="Sin">
      <div className="App__Aside"></div>
      <div className="App__Form">
        <div className="PageSwitcher">
          <NavLink
            to="/sign-in"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="FormTitle">
          <NavLink
            to="/sign-in"
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
          >
            Sign In
          </NavLink>
          or
          <NavLink
            exact
            to="/"
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link FormTitle__Link"
          >
            Sign Up
          </NavLink>
        </div>
        <Route path="/" exact component={SignUpForm} />

        <Route path="/sign-in" exact component={SignInForm} />
      </div>
    </div>
  </Router>

  );
}

export default App;
