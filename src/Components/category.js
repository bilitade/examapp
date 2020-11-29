import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class category extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="border rounded-0"
          id="quiz-page"
          style={{ width: "100%", paddingTop: 100 }}
        >
          <Navbar />
          <div
            className="container-sm text-left"
            id="category-container"
            style={{ width: "70%", marginTop: "-10px" }}
          >
            <div className="row">

              <div
              onClick={(e) => {
                 
                this.props.history.push({
                  pathname:"/quiz",
                  state: {examCategory:"private"}

                });
              }}
              className="col-sm-12 col-md-4">
                <div
                  className="jumbotron"
                  id="motorbike"
                  style={{ background: "rgb(92,184,92)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category2.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Private Auto.</strong>
                    </p>
                  </div>
                </div>
              </div>



              <div
              onClick={(e) => {
                this.props.history.push({
                  pathname:"/quiz",
                  state: {examCategory:"motor"}

                });
              }}
              
              
              
              className="col-sm-12 col-md-4">
                <div
                  className="jumbotron"
                  id="traffic-law"
                  style={{ background: "rgb(2,117,216)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category3.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>&nbsp; Motorcycle</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div
                  className="jumbotron"
                  id="frieght"
                  style={{ background: "rgb(217,83,79)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category9.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>public Trans&nbsp;&nbsp;</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div 
              onClick={(e) => {
                 
                this.props.history.push({
                  pathname:"/quiz",
                  state: {examCategory:"frieght"}
  
                });
              }}
              
              
              
              className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="technical"
                  style={{ background: "rgb(91,192,222)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category10.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw", color: "rgb(249,249,249)" }}>
                      <strong>&nbsp; Frieght 1&nbsp;</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile"
                  style={{ background: "rgb(41,43,44)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category6.png"
                      style={{ width: "32%" }}
                    />
                    <p className="text-light" style={{ fontSize: "2vw" }}>
                      <strong>Taxi 2</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-1"
                  style={{ background: "rgb(240,173,78)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category6.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Taxi 1</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron border rounded"
                  id="private-automobile-2"
                  style={{ background: "rgb(247,247,247)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category8.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Liquid 1</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-3"
                  style={{ background: "rgb(240,173,78)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category1.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Frieght 2</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-4"
                  style={{ background: "rgb(217,83,79)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category7.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Liquid 2</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-5"
                  style={{ background: "rgb(2,117,216)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category11.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Frieght 3</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-6"
                  style={{ background: "rgb(92,184,92)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category12.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Technic one</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-7"
                  style={{ background: "rgb(91,192,222)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category12.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Technic two</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div 
              
              onClick={(e) => {
                 
                this.props.history.push({
                  pathname:"/quiz",
                  state: {examCategory:"law"}
  
                });
              }}
              
              className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-9"
                  style={{ background: "rgb(41,43,44)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category4.png"
                      style={{ width: "32%" }}
                    />
                    <p className="text-light" style={{ fontSize: "2vw" }}>
                      <strong>Law</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-10"
                  style={{ background: "rgb(217,83,79)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category14.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Psychology</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron border rounded"
                  id="private-automobile-8"
                  style={{ background: "rgb(247,247,247)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category11.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Dry load</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-11"
                  style={{ background: "rgb(240,173,78)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category13.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Information</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-12"
                  style={{ background: "rgb(2,117,216)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category15.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Emergency</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div
                  className="jumbotron"
                  id="private-automobile-13"
                  style={{ background: "rgb(92,184,92)" }}
                >
                  <div className="text-center">
                    <img
                      src="icons/category/category5.png"
                      style={{ width: "32%" }}
                    />
                    <p style={{ fontSize: "2vw" }}>
                      <strong>Driving Technic</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}
