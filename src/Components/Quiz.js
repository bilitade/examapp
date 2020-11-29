import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import "jquery/dist/jquery";
import $ from "jquery";
import "bootstrap/js/dist/toast";


import law from "../exam/law.json";
import motor from "../exam/motor.json";
import privat from "../exam/private.json";
import technical from "../exam/technical.json";
import frieght from "../exam/law.json";

import btnNotification from "../media/audio/button-sound.mp3";


export default class Quiz extends Component {
  state = {
    questions: null,
    currentQuestion: {},
    nextQuestion: {},
    previousQuestion: {},
    answer: 0,
    numberOfQuestions: 0,
    numberOfAnsweredQuestion: 0,
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    time: {
      minute: 0,
      seconds: 0,
    },
    examMode: false,
  };
  Interval = null;

 

  // function to display first question
  displayQuestions = (
    

  ) => {

    this.setState((prevState)=>{
      const { state } = this.props.location;
       switch(state.examCategory)
       {
         case "motor": 
         prevState.questions= motor;
         prevState.numberOfQuestions= motor.length;
         break;
         case "private":
          prevState.questions= privat;
         prevState.numberOfQuestions= privat.length;
         break;

         case "technical":
          prevState.questions= technical;
          prevState.numberOfQuestions= technical.length;
          break;
          case "law":
            prevState.questions= law;
            prevState.numberOfQuestions=law.length;
            break;
            case "frieght":
              prevState.questions= frieght;
              prevState.numberOfQuestions=frieght.length;
              break;
              default:
                console.log("error")

       }
       
         
        

    },()=>{

      let currentQuestionIndex=this.state.currentQuestionIndex

  

      let questions=this.state.questions;
      
      let CurrentQuestion = questions[currentQuestionIndex];
      let NextQuestion = questions[currentQuestionIndex + 1];
      let PreviousQuestion = questions[currentQuestionIndex - 1];
      let Answer=CurrentQuestion.answer
       this.setState({
        currentQuestion:CurrentQuestion,
         nextQuestion:NextQuestion,
         previousQuestion:PreviousQuestion,
         answer:Answer,
       }); 


    })


   
  };



  changeExamMode = (e) => {
    this.setState(
      (prevState) => ({
        examMode: !prevState.examMode,
      }),
      () => {
        if (this.state.examMode) {
          this.startTimer();
        } else {
          clearInterval(this.Interval);
          this.setState({
            time: { minute: 0, seconds: 0 },
          });
        }
      }
    );
  };

  // call display question function when the react app starts
  componentDidMount( ) {
  
   
    this.displayQuestions();
  }

  handleOptionClick = (e) => {
    if (e.target.id === this.state.answer) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  };
  endGame = () => {
    const PlayState = {
      score: this.state.score,
      numberOfQuestions: this.state.numberOfQuestions,
      numberOfAnsweredQuestion: this.state.numberOfAnsweredQuestion,
      correctAnswers: this.state.correctAnswers,
      wrongAnswers: this.state.wrongAnswers,
    };

    setTimeout(() => {
      this.props.history.push({
        pathname: "/result",
        state: PlayState,
      });
    }, 1000);
  };

  correctAnswer = () => {
    $("#rightToast").toast("show");

    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,

        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endGame();
        } else {
          this.displayQuestions(
      
          );
        }
      }
    );
  };
  wrongAnswer = () => {
    $("#wrongToast").toast("show");
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endGame();
        } else {
          this.displayQuestions(
          
          );
        }
      }
    );
  };

  // play button sound
  playBtnSound = () => {
    document.getElementById("btn-sound").play();
  };

  handleNextClick = () => {
    this.playBtnSound();
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          this.displayQuestions(
        
          );
        }
      );
    }
  };
  handlePrevClick = () => {
    if (this.state.examMode === false) {
      this.playBtnSound();
      if (this.state.previousQuestion !== undefined) {
        this.setState(
          (prevState) => ({
            currentQuestionIndex: prevState.currentQuestionIndex - 1,
          }),
          () => {
            this.displayQuestions(
             
            );
          }
        );
      }
    }
  };
  handleQuit = () => {
    this.playBtnSound();
    this.endGame();
  };

  handleBtnClick = (e) => {
    switch (e.target.id) {
      case "btn-prev":
        this.handlePrevClick();
        break;

      case "btn-next":
        this.handleNextClick();
        break;
      case "btn-quit":
        this.handleQuit();

        break;
      default:
        return 0;
    }
  };

  startTimer = () => {
    const countDownTime = Date.now() + 120000;
    this.Interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.Interval);
        this.setState({ time: { minutes: 0, seconds: 0 } }, () => {
          this.endGame();
        });
      } else {
        this.setState({
          time: { minute: minutes, seconds: seconds },
        });
      }
    }, 1000);
  };

  render() {
     const { currentQuestion } = this.state;
    let quest = { ...currentQuestion.question };
    let optA = { ...currentQuestion.optionA };
    let optB = { ...currentQuestion.optionB };
    let optC = { ...currentQuestion.optionC };
    let optD = { ...currentQuestion.optionD };
 
    return (
      <Fragment>
     
        <audio id="btn-sound" src={btnNotification}></audio>
 
        <div
          className="border rounded-0"
          id="quiz-page"
          style={{ width: "100%", paddingTop: 100, height: "100vh" }}
        >
          <Navbar changeExamMode={this.changeExamMode} />

          <div
            className="container border rounded"
            id="quiz-container"
            style={{ width: "100%" }}
          >
            <div className="btn   btn-light">
              {" "}
              Time Left : {this.state.time.minute} m :{this.state.time.seconds}s
            </div>
            <span className="btn btn-dark ml-4 ">
              {" "}
              Question {this.state.currentQuestionIndex + 1} of{" "}
              {this.state.numberOfQuestions}
            </span>

            <div
              className="border rounded d-flex"
              id="question-container"
              style={{ marginTop: 1 }}
            >
              {quest.hasImg ? (
                <img
                  alt="question"
                  className=" ml-4 "
                  style={{ width: 64 }}
                  src={quest.imgUrl}
                />
              ) : (
                ""
              )}
              <p className=" ml-4">
                <strong>{quest.questionText}</strong>
              </p>
            </div>
            <div
              className="text-center"
              id="option-container"
              style={{ width: "97%", marginTop: "6vh", paddingRight: 0 }}
            >
              <ul
                className="text-center border rounded-0 align-content-center"
                id="option-list"
                style={{ paddingRight: 27, listStyle: "upper-alpha" }}
              >
                <li id={optA.id} style={{ marginTop: 5, marginBottom: 5 }}>
                  <div
                    onClick={this.handleOptionClick}
                    id={optA.id}
                    className="text-center d-lg-flex justify-content-lg-center btn btn-primary d-block d-flex"
                  >
                    {optA.hasImg ? (
                      <a href={() => false} id={optA.id}>
                        <img
                          alt="option A"
                          id={optA.id}
                          style={{ width: 64 }}
                          src={optA.ImgUrl}
                        />
                      </a>
                    ) : (
                      " "
                    )}
                    <p id={optA.id}>{optA.optionText}</p>
                  </div>
                </li>

                <li id={optB.id} style={{ marginBottom: 5 }}>
                  <div
                    onClick={this.handleOptionClick}
                    id={optB.id}
                    className="d-lg-flex justify-content-lg-center btn btn-primary d-block d-flex"
                  >
                    {optB.hasImg ? (
                      <a href={() => false} id={optB.id}>
                        <img
                          alt="option B"
                          id={optB.id}
                          style={{ width: 64 }}
                          src={optB.ImgUrl}
                        />
                      </a>
                    ) : (
                      " "
                    )}
                    <p id={optB.id}>{optB.optionText}</p>
                  </div>
                </li>

                <li id={optC.id} style={{ marginBottom: 5 }}>
                  <div
                    onClick={this.handleOptionClick}
                    id={optC.id}
                    className="d-lg-flex justify-content-lg-center btn btn-primary d-block d-flex"
                  >
                    {optC.hasImg ? (
                      <a href={() => false} id={optC.id}>
                        <img
                          alt="option C"
                          id={optC.id}
                          style={{ width: 64 }}
                          src={optC.ImgUrl}
                        />
                      </a>
                    ) : (
                      " "
                    )}
                    <p id={optC.id}>{optC.optionText}</p>
                  </div>
                </li>

                <li id={optD.id} style={{ marginBottom: 5, marginTop: 5 }}>
                  <div
                    onClick={this.handleOptionClick}
                    id={optD.id}
                    className="d-lg-flex justify-content-lg-center btn btn-primary d-block d-flex"
                  >
                    {optD.hasImg ? (
                      <a href={() => false} id={optD.id}>
                        {" "}
                        <img
                          alt="option C"
                          id={optD.id}
                          style={{ width: 64 }}
                          src={optD.ImgUrl}
                        />
                      </a>
                    ) : (
                      <p></p>
                    )}
                    <p id={optD.id}>{optD.optionText} </p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="text-center"
              id="question-navigator"
              style={{ marginTop: 56, marginRight: 6, paddingRight: 0 }}
            >
              <button
                id="btn-prev"
                className="btn btn-warning"
                type="button"
                onClick={this.handleBtnClick}
                style={{ paddingRight: 15, marginRight: 10, paddingLeft: 15 }}
              >
                Prev
              </button>
              <button
                id="btn-next"
                className="btn btn-success"
                type="button"
                onClick={this.handleBtnClick}
                style={{ marginRight: 10 }}
              >
                Next
              </button>
              <button
                id="btn-quit"
                className="btn btn-danger"
                onClick={this.handleBtnClick}
                type="button"
                style={{ marginRight: 10 }}
              >
                Quit
              </button>

             <div className=" container">
             
             <div id="wrongToast" class="toast mt-3  bg-danger">
             <div class="toast-body ">Wrong</div>
           </div>
           <div id="rightToast" class="toast mt-3 bg-success">
             <div class="toast-body ">Correct</div>
           </div>
             </div>
              
            </div>
            <div></div>
          </div>
        </div>  
      </Fragment> 
    );
  }
}
