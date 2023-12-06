import React from "react"
import "../../index.scss"
import "./index.scss"

import { Col, Row } from "react-bootstrap"

export const Features = () => {
  return (
    <React.Fragment>
      <div id="features_wrapper">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "935px" }}>
            <h4>Features</h4>
            <h1>Most Rewarding Platform on Market</h1>
            <p>
              The METACONNECT platform also has many advantages that aim to cover a great shortcoming that exists in the digital
              world, as it is considered as a central social network for broadcasting news and conducting social conversations for
              other digital currency communities, as it adopts the principle of ease of use to achieve the largest possible
              financial return, and to achieve this equation Difficult has not previously been reached by any other platform.
            </p>
          </div>
        </div>
        <div className="custome_card_wrapper">
          <Row>
            <Col className="polygon_effect polygon_wrapper polygon_alignments" xs={12} lg={4}>
              {/* <img className="polygon" src="/assets/images/polygon1.svg" alt="" /> */}
              <div className="customecard">
                <img className="polygon" src="/assets/images/polygon1.svg" alt="" />
                <div className="customecard_contents">
                  <h5>Gaming Platform</h5>
                  <div style={{ textAlign: "center" }}>
                    <span>A computer system specially made for getting into the METAVERSE world</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="polygon_effect polygon_wrapper" xs={12} lg={4}>
              {/* <img className="polygon" src="/assets/images/polygon2.svg" alt="" /> */}
              <div className="customecard">
                <img className="polygon" src="/assets/images/polygon2.svg" alt="" />
                <div className="customecard_contents">
                  <h5>
                    Integrated <br /> Trading Platform
                  </h5>
                  <div style={{ textAlign: "center" }}>
                    <span>Place trades and monitor accounts through financial intermediaries</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="polygon_effect polygon_wrapper polygon_alignments" xs={12} lg={4}>
              {/* <img className="polygon" src="/assets/images/polygon3.svg" alt="" /> */}
              <div className="customecard">
                <img className="polygon" src="/assets/images/polygon3.svg" alt="" />
                <div className="customecard_contents">
                  <h5>
                    Specialized <br /> Data Center
                  </h5>
                  <div style={{ textAlign: "center" }}>
                    <span>Our own equipment and software for IT operations and storage of data and applications</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="polygon_effect polygon_wrapper polygon_alignments" xs={12} lg={4}>
              {/* <img className="polygon" src="/assets/images/polygon1.svg" alt="" /> */}
              <div className="customecard">
                <img className="polygon" src="/assets/images/polygon4.svg" alt="" />
                <div className="customecard_contents">
                  <h5>Learning System</h5>
                  <div style={{ textAlign: "center" }}>
                    <span>Delivery of educational courses , training programs , or learning and development programs</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="polygon_effect polygon_wrapper" xs={12} lg={4}>
              {/* <img className="polygon" src="/assets/images/polygon2.svg" alt="" /> */}
              <div className="customecard">
                <img className="polygon" src="/assets/images/polygon5.svg" alt="" />
                <div className="customecard_contents">
                  <h5>
                    METAGOL <br /> Point System
                  </h5>
                  <div style={{ textAlign: "center" }}>
                    <span>
                      They can be used as a rewards system to help players , traders and content creators to engage with what they
                      do
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="polygon_effect polygon_wrapper polygon_alignments" xs={12} lg={4}>
              {/* <img className="polygon" src="/assets/images/polygon3.svg" alt="" /> */}
              <div className="customecard">
                <img className="polygon" src="/assets/images/polygon6.svg" alt="" />
                <div className="customecard_contents">
                  <h5>
                    Individuals and <br /> companies
                  </h5>
                  <div style={{ textAlign: "center" }}>
                    <span>Connect the world’s professionals to make them more productive and successful</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}
