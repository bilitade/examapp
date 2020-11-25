import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm fixed-top shadow-lg">
          <div className="container-fluid">
            <Link  to="/" className="navbar-brand">
              Model&nbsp;
              <i className="fa fa-newspaper-o" /> Exam
            </Link>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav text-justify mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <strong>Home</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/category" className="nav-link">
                    <strong>Category</strong>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p>
                <strong>Exam Mode:&nbsp;&nbsp;</strong>
                <input type="checkbox" onChange={this.props.changeExamMode} />
              </p>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
