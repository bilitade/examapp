import React, { Component,Fragment } from 'react'
import Navbar from './Navbar';


export default class TrafficDashboard extends Component {
    render() {
        return (
          <Fragment>
            <div id="traffic-page" style={{ width: "100%", paddingTop: 100 }}>
              <Navbar/>
              <div
                className="container-sm text-left"
                id="quiz-container"
                style={{ width: "70%", marginTop: "-11px" }}
              >
                <div className="row">
                  <div className="col col-sm-12 col-md-6">
                  
                    <div   onClick={(e) => {
                 
                        this.props.history.push({
                          pathname:"/dashBoard/traffic/showpage",
                          state: {signtype:"warning"}
          
                        });
                      }}    className="card">
                      <div className="card-body text-center">
                      
                        <img
                        alt=""
                          src="assets/img/asset56.png"
                          style={{ width: "80%" }}
                        />
                        <h3 className="text-center card-title">Warning Sign</h3>
                      </div>
                    </div>
                  </div>

                  <div onClick={(e) => {
                 
                    this.props.history.push({
                      pathname:"/dashBoard/traffic/showpage",
                      state: {signtype:"lights"}
      
                    });
                  }}    className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                        alt=""
                          src="assets/img/modeltrafic.gif"
                          style={{ width: "80%" }}
                        />
                        <h3 className="text-center card-title">
                          Traffic Lights
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div onClick={(e) => {
                 
                    this.props.history.push({
                      pathname:"/dashBoard/traffic/showpage",
                      state: {signtype:"mandatory"}
      
                    });
                  }}    className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                        alt=""
                          src="assets/img/asset8.png"
                          style={{ width: "80%" }}
                        />
                        <h4 className="text-center card-title">
                          Mandatory sign
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div onClick={(e) => {
                 
                    this.props.history.push({
                      pathname:"/dashBoard/traffic/showpage",
                      state: {signtype:"priority"}
      
                    });
                  }}   className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                        alt=""
                          src="assets/img/asset3.png"
                          style={{ width: "80%" }}
                        />
                        <h3 className="text-center card-title">Priority</h3>
                      </div>
                    </div>
                  </div>
                  <div onClick={(e) => {
                 
                    this.props.history.push({
                      pathname:"/dashBoard/traffic/showpage",
                      state: {signtype:"info"}
      
                    });
                  }}   className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">
                        <img
                        alt=""
                          src="assets/img/asset1.png"
                          style={{ width: "80%" }}
                        />
                        <h3 className="text-center card-title">
                          Information sign
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div onClick={(e) => {
                 
                    this.props.history.push({
                      pathname:"/dashBoard/traffic/showpage",
                      state: {signtype:"restrict"}
      
                    });
                  }}    className="col col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body text-center">

                        <img
                        alt=""
                          src="assets/img/asset30.png"
                          style={{ width: "80%" }}
                        />
                        <h3 className="text-center card-title">
                          Restricted sign
                        </h3>
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
