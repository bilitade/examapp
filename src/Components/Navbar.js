import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm fixed-top shadow-lg"  style={{background: "#ffffff"}}>
          <div className="container-fluid">
          <Link to="/" className="navbar-brand" ><img src="assets/img/moooodel.png" alt="" style={{minWidth: 50, maxWidth: 70}} /></Link>


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
                  <Link to="/dashBoard" className="nav-link">
                    <strong>Daashboordii</strong>
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/category" className="nav-link">
                  <strong>Gosa Qormaataa</strong>
                </Link>
              </li>



              </ul>
            </div>
            <div>
              <p>
                <strong>Akka Qormaataa :&nbsp;&nbsp;</strong>
                <input type="checkbox" onChange={this.props.changeExamMode} />
              </p>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
