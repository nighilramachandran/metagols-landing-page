import React from "react"
import "../../index.scss"
import "./index.scss"
import Lottie from "react-lottie"

import { Col, Row } from "react-bootstrap"

export const GamingFlatform = () => {
  return (
    <React.Fragment>
      <div id="Gamingflatform">
        <h4>MetaGol Gaming Platform</h4>
        <img style={{ marginBottom: "20px" }} src="/assets/images/gamingmetagolslogo.svg" alt="" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ maxWidth: "716px" }}>
            We are proud to launch MetaGol, the play with a MetaGol Token is the core of our Metaverse Game “MetaGol”, an
            expansive 3D universe filled with exploration, discovery, and creation.
          </p>
        </div>
        <div className="videoplayer-wrapper">
          <div className="videoplayer">
            <iframe
              src="https://metagol.app/assets/images/game.mp4"
              controls="0"
              // frameborder="0"
              // allowtransparency="false"
              // allowfullscreen="false"
              loop
            ></iframe>
          </div>
          {/* <div className="vidoeplayer-button">
            <img src="/assets/icons/playbutton.svg" alt="" />
          </div> */}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ maxWidth: "716px" }}>To Know More About Our Gaming Platform Feel Free To Visit</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://metagol.app" target="_blank">
            <section className="svg-container">
              <svg viewBox="0 0 171 48" className="rect">
                <rect className="foreground" rx="7.5" stroke="white" />
              </svg>
              <p>MetaGol.app</p>
            </section>
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}
