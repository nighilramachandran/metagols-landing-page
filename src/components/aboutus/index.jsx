import React, { useState, useEffect } from "react"
import "../../index.scss"
import "./index.scss"
import { Col, Row } from "react-bootstrap"
import { LottieLazyLoad } from "../lottie-lazyload/LottieLazyLoad"

export const Aboutus = () => {
  return (
    <React.Fragment>
      <div id="aboutus">
        <Row>
          <Col xs={12} lg={6}>
            <LottieLazyLoad url="/lotties/VRMAN.json" />
          </Col>
          <Col xs={12} lg={6}>
            <p className="about">About us</p>
            <h1>
              METAGOLS will feel like a mixture of online social experiences, and it will allow you to share your experiences and
              ideas with other people.
            </h1>
            <h2>
              It is the perfect evoloution in a long line of social technologies, and it opens the door to a new development for
              our company
            </h2>
            <h3>
              Creativity , and the strategic mindset of leadership in giving, and the vision to adapt to changing world is exactly
              what set METAGOLS apart from the rest. In nominal terms, the company's vision is a representation of where we want
              to be for a given of time.
            </h3>
            {/* <div className="mobile-button-wrapper ">
              <section className="svg-container">
                <svg viewBox="0 0 154 48" className="rect">
                  <g>
                    <rect className="foreground download" rx="7.8" />
                  </g>
                </svg>

                <p>Our Vision</p>
              </section>
            </div> */}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}
