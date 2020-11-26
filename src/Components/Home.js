import React, { Component, Fragment } from "react";


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="border rounded-0"
          id="home-page"
          style={{
            width: "100%",
            paddingTop: 100,
            height: "100vh",
            backgroundImage: "url(assets/img/home2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopStyle: "none",
          }}
        >
          <div
            className="container text-center"
            id="home-contain"
            style={{
              marginTop: "-1%",
              width: "56%",
              background: "rgba(14,12,12,0.63)",
              minHeight: "60vh",
            }}
          >
            <h1
              className="text-light"
              style={{ marginTop: 17, paddingTop: 22 }}
            >
              <strong>Model&nbsp;</strong>
              <i
                className="fa fa-newspaper-o"
                style={{ fontSize: 53, color: "rgb(255,255,255)" }}
              />
              <strong>&nbsp;Exam</strong>
            </h1>
            <div style={{ marginTop: "20%" }}>
              <select
                id="lang"
                style={{ width: "40%",  fontSize: "1.2rem" }}
              >
                <optgroup label="Select your Language">
                  <option value="/dashBoard" defaultValue>
                    Afaan Oromo
                  </option>
                  <option value="amahric">አማርኛ</option>
                </optgroup>
              </select>
            </div>
            <div style={{ marginTop: "12%", marginBottom: 33 }}>
              <button
                onClick={(e) => {
                  const el = document.getElementById("lang").value;
                  this.props.history.push(el);
                }}
                className="btn btn-primary"
                type="button"
                style={{ width: "33%" }}
              >
                &nbsp;Next
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
