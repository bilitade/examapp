import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import warning from'../trafficsigns/warning.json'
import mandatory from'../trafficsigns/mandatory.json'
import restrict from'../trafficsigns/restrict.json'
import info from '../trafficsigns/info.json'
import priority from '../trafficsigns/priority.json'
import light from'../trafficsigns/light.json'



export default class TrafficSignShow extends Component {

     state={signtype:[] }




      initialize=()=>{


        const { state } = this.props.location;
        switch (state.signtype) {
            case "warning":
             this.setState({
              signtype:warning
             }) 
                break;
            case "mandatory":
                this.setState({signtype:mandatory});
                break;
            case "priority":
               this.setState({
                signtype:priority
               })
                break;
            case "info":
               this.setState({
                signtype:info
               })
                break;
            case "restrict":
                this.setState({signtype:restrict});
               break;
            case "lights":
              this.setState({
                signtype:light
              })
              break
        
            default:
                console.log("no data")
        }

 
 }
 componentDidMount(){
     
    this.initialize();





      }




    render() {
        return (
          <Fragment>
            <div id="quiz-page" style={{ width: "100%", paddingTop: 100 }}>
              <Navbar/>

              <ol
                className="breadcrumb"
                style={{
                  paddingTop: 12,
                  marginTop: "-45px",
                  position: "fixed",
                  width: "100%",
                }}
              >
                <li className="breadcrumb-item">
                  <Link to="/dashBoard">
                    <span>DashBoard</span>
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link  to="/dashBoard/traffic">
                    <span>Traffic Signs</span>
                  </Link>
                </li>

              </ol>
              <div
                className="container-fluid text-left"
                id="quiz-container"
                style={{ width: "95%", marginTop: "-11px", height: 1100 }}
              >
                <div
                  className="table-responsive table-bordered"
                  style={{ marginTop: 30 }}
                >
                  <table className="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">Mallattoolee daandii</th>
                        <th className="text-center">Ergaa isaan Dabarasan</th>
                      </tr>
                    </thead>
                    <tbody>
                     { this.state.signtype.map( (data)=>(

                      <tr>
                        <td className="text-center" style={{ width: "35%" }}>
                          <img
                            src={data.img} alt=""
                            style={{ width: "25%" }}
                          />
                        </td>
                        <td> <b>{data.text}</b> </td>
                      </tr>
                     )) }
                   

                    
                    </tbody>
                  </table>
                </div>
              </div>
              <footer
                style={{
                  position: "fixed",
                  bottom: 0,
                  zIndex: 2,
                  width: "100%",
                  background: "rgb(21,21,21)",
                  height: 29,
                }}
              >
                <div
                  style={{ width: "100%", padding: "-20px", paddingBottom: 0 }}
                >
                  <p
                    className="text-center text-light"
                    style={{
                      fontFamily: "Alatsi, sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    MODEL©2020
                    <br />©<br />
                    <br />©<br />
                    <br />
                  </p>
                </div>
              </footer>
            </div>
          </Fragment>
        );
    }
}
