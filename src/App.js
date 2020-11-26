import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import Home from "./Components/Home";
import DashBoard from './Components/DashBoard'

import category from "./Components/category";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact strict path="/result" component={Result} />
        <Route exact strict path="/quiz" component={Quiz} />
        <Route exact strict path="/category" component={category} />
        <Route exact strict path="/dashBoard" component={DashBoard} />
        <Route exact strict path="/" component={Home} />


      </Router>
    );
  }
}
