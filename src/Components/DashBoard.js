import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

export default class DashBoard extends Component {
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
                id="quiz-container"
                style={{ width: "70%", marginTop: 104, height: "67vh" }}
              >
                <div className="row">
                  <div className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="text-center card-title">Notes</h4>
                        <p className="text-center text-success">
                          <Link to="/note" ><i
                          className="fa fa-book text-success"
                          style={{ fontSize: "10rem" }}
                        />  </Link> 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="text-center card-title">quiz</h4>
                        <p className="text-center">
                         <Link to="/category">
                         <i
                         className="fa fa-file-text  text-primary"
                         style={{ fontSize: "10rem" }}
                       />
                         </Link>
                       
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="text-center card-title">
                          Traffic signs
                        </h4>
                        <p className="text-center ">
                        <Link to="/traffic-sign">
                        <i
                        className="fa fa-warning text-danger"
                        style={{ fontSize: "10rem" }}
                      />
                        
                        </Link>
                         
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="text-center card-title">About</h4>
                        <p className="text-center ">
                           <Link to="/about"><i
                           className="fa fa-info-circle text-dark"
                           style={{ fontSize: "10rem" }}
                         /></Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}
