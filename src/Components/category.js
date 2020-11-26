import React, { Component, Fragment } from "react";
import Navbar from'./Navbar'


export default class category extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="border rounded-0"
          id="category-page"
          style={{ width: "100%", paddingTop: 100, }}
        >
          <Navbar/>
         
          <div
            className="container-sm text-left"
            id="category-container"
            style={{ width: "70%", marginTop: 104, height: "67vh" }}
          >
            <div onClick={(e) => {
                 
              this.props.history.push({
                pathname:"/quiz",
                state: {examCategory:"frieght"}

              });
            }}
              className="jumbotron"
              id="frieght"
              style={{ background: "rgb(217,83,79)" }}
            >
              <div className="text-center">
                <img src="assets/img/caregory1.png" alt="" style={{ width: "32%" }} />
                <p style={{ fontSize: "2rem" }}>
                  <strong>Freight&nbsp;&nbsp;</strong>
                </p>
              </div>
            </div>
            <div   onClick={(e) => {
                 
                  this.props.history.push({
                    pathname:"/quiz",
                    state: {examCategory:"private"}

                  });
                }}
              className="jumbotron"
              id="private-automobile"
              style={{ background: "rgb(240,173,78)" }}
            >

              <div className="text-center">
                <img src="assets/img/category2.png" alt="" style={{ width: "32%" }} />
                <p style={{ fontSize: "2rem" }}>
                  <strong>Private Automobile</strong>
                </p>
              </div>
            </div>
            <div
            onClick={(e) => {
                 
              this.props.history.push({
                pathname:"/quiz",
                state: {examCategory:"motor"}

              });
            }}
              className="jumbotron"
              id="motorbike"
              style={{ background: "rgb(92,184,92)" }}
            >
              <div className="text-center">
                <img src="assets/img/category3.png" alt="" style={{ width: "32%" }} />
                <p style={{ fontSize: "2rem" }}>
                  <strong>Motor bike</strong>
                </p>
              </div>
            </div>
            <div    onClick={(e) => {
                 
              this.props.history.push({
                pathname:"/quiz",
                state: {examCategory:"law"}

              });
            }}
              className="jumbotron"
              id="traffic-law"
              style={{ background: "rgb(2,117,216)" }}
            >
              <div className="text-center">
                <img src="assets/img/category4.png" alt="" style={{ width: "32%" }} />
                <p style={{ fontSize: "2rem" }}>
                  <strong>&nbsp;Traffic Law</strong>
                </p>
              </div>
            </div>
            <div
            onClick={(e) => {
                 
              this.props.history.push({
                pathname:"/quiz",
                state: {examCategory:"technical"}

              });
            }}
              className="jumbotron"
              id="technical"
              style={{ background: "rgb(91,192,222)" }}
            >
              <div className="text-center">
                <img src="assets/img/technic.png" alt ="" style={{ width: "32%" }} />
                <p style={{ fontSize: "2rem", color: "rgb(249,249,249)" }}>
                  <strong>&nbsp; Technical&nbsp;</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
