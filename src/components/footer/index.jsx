import React from "react"
import "../../index.scss"
import "./index.scss"
import { Row, Col, Table } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"

export const Footer = () => {
  let navigate = useNavigate()
  return (
    <React.Fragment>
      <div id="Footer">
        <div className="footer_items">
          <Row>
            <Col className="footer_items_col_one" lg={6}>
              <div>
                <img src="/assets/images/metagolslogolarge.svg" style={{ width: "143px", height: "145px" }} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="footer_wrapper">
                <div className="footer_links_wrapper">
                  <p>Menu</p>
                  <ul className="footer_link">
                    {/* <button onClick={() => navigate("/features")}>Home</button> */}
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/#aboutus">About Us</a>
                    </li>
                    {/* <li>
                      <a href="#">Our Vision</a>
                    </li> */}
                    <li>
                      <a href="/#service">Services</a>
                    </li>
                    <li>
                      <a href="/team">Our Team</a>
                    </li>
                    <li>
                      <a href="/join-our-team">Carreers</a>
                    </li>
                  </ul>
                </div>
                <div className="footer_links_wrapper">
                  <p>Service</p>
                  <ul className="footer_link">
                    <li>
                      <a href="/#service">Company Services</a>
                    </li>
                    <li>
                      <a href="/#service">Indivadual Services</a>
                    </li>
                    <li>
                      <a href="/#features_two_wrapper">Hologram</a>
                    </li>
                    <li>
                      <a href="/features/#wallet-features">Wallet & Crypto</a>
                    </li>
                    {/* <li>
                      <a href="#">Development</a>
                    </li> */}
                  </ul>
                </div>
                <div className="footer_links_wrapper">
                  <p>Links</p>
                  <ul className="footer_link">
                    <li>
                      <a href="https://gogolcoin.io/" target="_blank">
                        GOGOLCOIN
                      </a>
                    </li>
                    <li>
                      <a href="/">MetaGols</a>
                    </li>
                    {/* <li>
                      <a href="#">MetaNow</a>
                    </li> */}
                    <li>
                      <a href="https://metagol.app" target="_blank">
                        MetaGol.app
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">GOLXChange</a>
                    </li> */}
                    {/* <li>
                      <a href="#">Silwana.co</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <hr></hr>
        </div>
        <div className="main_footer">
          <div className="column_reverse">
            <h5>Copyright © 2022 MetaConnect. All Rights Reserved.</h5>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "40px" }}>
              <a href="">
                <span>Terms of Use</span>
              </a>
              <a href="">
                <span>Privacy Policy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
