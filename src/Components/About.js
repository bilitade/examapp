import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="border rounded-0"
          id="quiz-page"
          style={{ width: "100%", paddingTop: 100, height: "100vh" }}
        >
          <Navbar/>
          <div
            className="container-sm text-left"
            id="category-container"
            style={{ width: "70%", marginTop: "-10px" }}
          >
            <h1 className="text-center">Developed By</h1>
            <h1 className="text-center"><i>Bilisuma</i> </h1>
            <h1 className="shadow" style={{ textAlign: "center" ,fontSize:"1rem"}}>
              Contact info
            </h1>
            <div className="row">
              <div
                className="col col-sm-12 col-md-4"
                style={{ textAlign: "center" }}
              >
                <a href="https://t.me/bilitade" style={{ textAlign: "center" }}>
                  <img
                    src="assets/img/telegram.png" alt=""
                    style={{ width: "50%", textAlign: "right" }}
                  />
                </a>
              </div>
              <div className="col text-center col-sm-12 col-md-4">
                <a href="https://www.youtube.com/channel/UCFyL1kHVYvYZfo3QAXZLw5g"   target="_blank" >
                  <img src="assets/img/youtube.png" alt="" style={{ width: "50%" }} />
                </a>
              </div>
              <div className="col text-center col-sm-12 col-md-4">
                <a href="mailto:Broswarner2007@gmail.com" >
                  <img
                    src="assets/img/gmail.png" alt=""
                    style={{ width: "50%" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
