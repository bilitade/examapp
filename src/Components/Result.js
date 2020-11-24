import React, { Component, Fragment } from "react";
import Navbar from "./Navbar"
export default class Result extends Component {
  state = {
    score: 0,
    numberOfQuestions: 0,
    numberOfAnsweredQuestion: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };

  componentDidMount() {
    const { state } = this.props.location;
    this.setState({
      score: (state.score / state.numberOfQuestions) * 100,
      numberOfQuestions: state.numberOfQuestions,
      numberOfAnsweredQuestion: state.numberOfAnsweredQuestion,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
    });
  }

  render() {
    return (
      <Fragment>
      <Navbar/>
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
              <strong>STATUS:&nbsp;&nbsp;</strong>
              {(this.state.score >75)?  <i
                className="fa fa-check-circle"
                style={{ fontSize: 43, color: "#2cd710" }}
              />: <i
              className="fa fa-times-circle"
              style={{ fontSize: 43, color: "rgb(255,15,0)" }}
            /> }
             
              
            </span>
          </div>
          <div
            className="text-center"
            id="result-Description"
            style={{ width: "97%", marginTop: "6vh", paddingRight: 0 }}
          >
            <ul
              className="text-center border rounded-0 align-content-center"
              id="option-list"
              style={{ paddingRight: 27 , listStyle:"none", textAlign:"center" }}
            >
              <li
                className="text-left"
                style={{ marginTop: 5, marginBottom: 5, fontSize: "1.5rem" }}
              >
                <strong>Your Score   &nbsp; </strong>&nbsp;-{" "}
                <strong>
                  <em>{(this.state.score).toFixed(2)}% &nbsp; &nbsp;&nbsp;</em>
                </strong>
              </li>
              <li
                className="text-left"
                style={{ marginBottom: 5, fontSize: "1.5rem" }}
              >
                <strong>Number of Questions&nbsp;&nbsp;</strong>-
                <strong>
                  <em> {this.state.numberOfQuestions}</em>
                </strong>
              </li>
              <li
                className="text-left"
                style={{ marginBottom: 5, fontSize: "1.5rem" }}
              >
                <strong>Number of Answered Question  {this.state.numberOfAnsweredQuestion}</strong>
              </li>
              <li
                className="text-left"
                style={{ marginBottom: 5, fontSize: "1.5rem" }}
              >
                <strong>
                  Correct Answers -&nbsp;<em>{this.state.correctAnswers}</em>
                </strong>
              </li>
              <li
                className="text-left"
                style={{ marginBottom: 5, fontSize: "1.5rem" }}
              >
                <strong>
                  Wrong Answers -&nbsp;&nbsp;<em> {this.state.wrongAnswers}</em>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
