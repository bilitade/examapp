import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

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
                        <h4 className="text-center card-title">Mallattoolee harka</h4>
                        <p className="text-center text-success">
                          <Link to="/dashBoard/police" ><img src="icons/trafficpolice/asset1.png" alt=""  style={{ width:"10rem"  }}/>  </Link> 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="text-center card-title">Qormaaata</h4>
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
                          Mallattoolee tiraafikaa
                        </h4>
                        <p className="text-center ">
                        <Link to="/dashBoard/traffic">
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
                        <h4 className="text-center card-title">waa'ee</h4>
                        <p className="text-center ">
                           <Link to="/dashBoard/About"><i
                           className="fa fa-info-circle text-dark"
                           style={{ fontSize: "10rem" }}
                         /></Link>
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
