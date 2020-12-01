import React, { Component, Fragment } from "react";

export default class Home extends Component {
  redirect = () => {
    setTimeout(() => {
      this.props.history.push("/dashBoard");
    }, 5000);
  };

  render() {
    this.redirect();
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
              background: "rgba(14,12,12,0)",
              minHeight: "60vh",
            }}
          >
            <h1
              style={{
                marginTop: 17,
                paddingTop: 22,
                color: "rgb(14,14,14)",
                width: 642,
              }}
            >
              <strong>&nbsp;</strong>
              <img src="assets/img/moooodel.png" alt ="" style={{ width: "30%" }} />
              <strong>&nbsp;Exam</strong>
            </h1>
            <span
              className="spinner-border spinner-border-sm text-dark"
              role="status"
              style={{
                margin: 42,
                padding: 10,
                width: "3%",
                height: "3%",
                borderWidth: "4.1875px",
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
