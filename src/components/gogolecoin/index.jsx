import React from "react"
import "./index.scss"
import { Row, Col } from "react-bootstrap"
import { LottieLazyLoad } from "../lottie-lazyload/LottieLazyLoad"

export const Gogolecoin = () => {
 
  return (
    <React.Fragment>
      <div id="gogolecoin_wrapper">
        {/* <div> */}
        <Row>
          <Col xs={12} lg={12} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "820px" }}>
              <h4>A Part Of</h4>
              <h1>GOGOLCOIN</h1>
              <h4>EcoSystem</h4>
              <p>
                We are unique as GogolCoin offers an ecosystem designed in a way that your digital investments derive you profit
                at the same time you are changing lives around the world.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={12}>
            <LottieLazyLoad url="/lotties/GoogleCoinimageDigitalPulse.json"/>
          </Col>
        </Row>

        {/* </div> */}
        <img style={{ paddingTop: "50px" }} className="gogolecoin" src="/assets/images/GOGOLCOIN.svg" alt="" />
        <a href="https://gogolcoin.io/" target="_blank">
          <button className="gogolcoin_btn">Gogolcoin</button>
        </a>
      </div>
    </React.Fragment>
  )
}
