import React from "react"
import "../../index.scss"
import "./index.scss"
import { Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Contactus = () => {
  let navigate = useNavigate()
  return (
    <React.Fragment>
      <div id="Contactus">
        <div className="contactus_card">
          <Row style={{ height: "100%" }}>
            <Col className="contactus_card_first_col" xs={12} lg={6}>
              <p>Contact</p>
              <h1>Contact Us</h1>
              <span>We are also building new technologies and communication channels</span>
            </Col>
            <Col className="contactus_card_second_col" xs={12} lg={6}>
              <div className="parent">
                <img src="/assets/images/contactus_background.svg" alt="" />
                <button onClick={() => navigate("/contact-us")} className="contactus_btn">
                  Contact Us
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}
