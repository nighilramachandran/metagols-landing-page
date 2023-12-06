import React from "react"
import "../../index.scss"
import "./index.scss"

import { Col, Row } from "react-bootstrap"
import { LottieLazyLoad } from "../lottie-lazyload/LottieLazyLoad"

export const Sourceofincome = () => {
  const data = [
    { icon: "1", message: "Sponsored ads", key: 1 },
    {
      icon: "2",
      message: "Providing search results on the METAGOLS site within the search results in google engines in real time",
      key: 2,
    },
    { icon: "3", message: "Support for new digital currencies in the METAGOLS digital wallet", key: 3 },
    { icon: "4", message: "Lessons and educational courses", key: 4 },
    { icon: "5", message: "Profit from P2P WITH ESCROW Deposit Guarantee", key: 5 },
    { icon: "6", message: "NFT P2P AND MARKETPLACE", key: 6 },
  ]
  return (
    <React.Fragment>
      <div id="Sourceoficome">
        <div style={{ paddingBottom: "80px" }}>
          <LottieLazyLoad url={"/lotties/Assest.json"} />
        </div>
        <Row>
          <Col xs={12} lg={6}>
            <div className="sourceofincome-left">
              <h3>The main sources of income for the</h3>
              <h1>MetaGols</h1>
              <p>
                Profit from such platforms is in the long run, and it depends on the number of people who want to register and use
                the platform, and the achievement of this desire is mainly caused by the content and features that are presented
                to people and how different they are from other platforms and the additions that you provide to them.
              </p>
              <img src="/assets/images/sourceofincomeleft.svg" style={{ width: "100%" }} alt="" />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="sourceofincome-right-wrapper">
              {data.map((el) => (
                <div className="sourceofincome-right-content" key={el.key}>
                  <img src={`/assets/icons/${el.icon}.svg`} alt="" />
                  <p>{el.message}</p>
                </div>
              ))}
              <img
                style={{ width: "60px", height: "63px", marginLeft: "auto" }}
                src="/assets/images/sourceofincomeright.svg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}
