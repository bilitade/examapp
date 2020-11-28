import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
            <footer
            style={{
              position: "fixed",
              bottom: 0,
              zIndex: 2,
              width: "100%",
              background: "rgb(21,21,21)",
              height: 27,
            }}
          >
            <div style={{ width: "100%" }}>
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
            </Fragment>
        )
    }
}
