import React from "react"
import "../../index.scss"
import "./index.scss"
import Lottie from "react-lottie"

import { Col, Row } from "react-bootstrap"
import { LottieLazyLoad } from "../lottie-lazyload/LottieLazyLoad"

export const Platform = () => {
  
  return (
    <React.Fragment>
      <div id="plaftform">
        <h4>GOL currency benefit from</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>MetaGols</h2>
        </div>
        <h4>Platform</h4>
        <div>
          <p>
            The benefit of the currency is directly linked to the increase in the credibility and belief of the people in the
            platform. The greater the number of those involved in the METAGOLS platform, the wider the circle of benefit in favor
            of the currency, as this platform is considered a very important gateway to the definition and marketing of all
            projects on which the GOGLCOIN digital currency is based.
          </p>
          <p>
            Since the general objective of all the projects that were launched within the GOGOLCOIN ecosystem is to make them more
            desirable for trading among speculators, it was necessary to issue the METAGOLS platform with an unparalleled design
            and ease of use, and its basic features that largely cover the existing shortage in the digital world. Presenting a
            platform of this kind and in this way will make it the focus of attention and interest of a large number of
            cryptocurrency communities, and thus exploiting this gain is a very important and fundamental thing for the definition
            and marketing of the GOGOLCOIN ecosystem
          </p>
        </div>
        <div>
          {/* <button className="gogolcoins_btn">Gogolcoins</button> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://gogolcoin.io/" target="_blank">
              <section className="svg-container">
                <svg viewBox="0 0 171 48" className="rect">
                  <rect className="foreground" rx="7.5" stroke="white" />
                </svg>
                <p>Gogolcoins</p>
              </section>
            </a>
          </div>
        </div>
        <br />
        <LottieLazyLoad url={"/lotties/gogol_coin.json"} />
        {/* <img src="/assets/images/coin.svg" style={{ width: "100%", maxWidth: "590px" }} alt="" /> */}
      </div>
    </React.Fragment>
  )
}
