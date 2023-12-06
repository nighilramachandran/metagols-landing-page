import React from "react"
import "./index.scss"
import { Row, Col } from "react-bootstrap"
import Lottie from "react-lottie"
import { LottieLazyLoad } from "../lottie-lazyload/LottieLazyLoad"

export const Welcome = () => {
  return (
    <React.Fragment>
      <div id="welcome_container">
        <Row>
          <Col xs={12} lg={6}>
            <h4>Meet in Style Like Never Before</h4>
            <p>
              We work to connect people all over the world. Recruiting high-level people helps us create better experiences for
              everyone. We build technologies that help people connect with friends and family, find communities, and grow
              businesses.
            </p>

            <div className="welcome_btns">
              <Row>
                <Col className="mb-3" lg={4} xs={12}>
                  <div className="mobile-button-wrapper">
                    <a href="https://www.metaconnectpro.com/login" target="_blank">
                      <button className="welcome_btn_signup">Signin</button>
                    </a>
                  </div>
                </Col>
                <Col className="mb-3" lg={4} xs={12}>
                  <div className="mobile-button-wrapper">
                    <section className="svg-container">
                      <svg viewBox="0 0 154 48" className="rect">
                        <g>
                          <rect className="foreground download" rx="7.8" />
                        </g>
                      </svg>
                      <p>Download</p>
                    </section>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <LottieLazyLoad url={"/lotties/GBluelinAnimation.json"} />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}
