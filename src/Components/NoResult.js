import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'


export default class NoResult extends Component {
    render() {
        return (
            <Fragment>
       <div className="border rounded-0" id="quiz-page" style={{width: '100%', paddingTop: 100, height: '100vh'}}>
  <Navbar/>
  <div className="container border rounded" id="quiz-container" style={{width: '70%', marginTop: 16, height: '67vh'}}>
    <div className="text-center" id="result-Description" style={{width: '100%', marginTop: '6vh', paddingRight: 0}}>
      <div className="jumbotron">
        <p style={{fontSize: 27}}><strong>Gaafileewwan&nbsp; dhiyaatan hojjette&nbsp; xummurteerta!&nbsp; &nbsp;Akka Qormaataatti yoo hojjechuu barbaadee ,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></p>
        <ul className="text-left" style={{listStyle: 'square'}}>
          <li><strong>Gosa Qormaata</strong> cuqaasi</li>
          <li>Itti ansee&nbsp; gosa Qormaata barbaade filaadhu</li>
          <li>Achiin&nbsp; <strong>Akka Qormaataatti</strong> kan jedhu cheekii (Check) godhi</li>
          <li>yammu check gootu battalumatti yeroon lakka'uu jalqaba!</li>
        </ul>
        <p><strong>Hubachiisaa</strong>: yemmuu <strong>Akka Qormaataatt</strong>i&nbsp; check goodhamu&nbsp; Gaafii erga dabartee duubatti deebi'uun hin dandaa'amu</p>
      </div>
    </div>
  </div>
</div>

            </Fragment>
        )
    }
}
