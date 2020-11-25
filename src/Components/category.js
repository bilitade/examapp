import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";

export default class category extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div
          className="container border rounded"
          id="quiz-container"
          style={{ width: "70%", marginTop: 104, height: "67vh" }}
        >
          <div
            className="text-right text-primary border rounded d-block d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center d-flex"
            id="result-status"
            style={{ marginTop: 24 }}
          >
            <span>
              <strong>Exam categories:&nbsp;&nbsp;</strong>
            </span>
          </div>
          <div
            className="text-center"
            id="result-Description"
            style={{ width: "97%", marginTop: "6vh", paddingRight: 0 }}
          >
            <h1> not finished</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}
