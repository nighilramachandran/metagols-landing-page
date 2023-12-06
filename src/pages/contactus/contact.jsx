import "bootstrap/dist/css/bootstrap.css"
import { MapComponent } from "src/components/map"
import { Col, Row } from "react-bootstrap"

import "./index.scss"

export const ContactusPage = () => {
  return (
    <div id="ContactusPage">
      <div>
        <img className="top_right_c" src="/assets/images/top_oval_right_general.png" alt="" />
        <h4 style={{ paddingBottom: "50px" }}>Get in Touch</h4>
        <Row>
          <Col lg={6} xs={12}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ maxWidth: "455px" }}>
                <h1 className="text-left mb-3">By filling up the form:</h1>
                <p className="text-left mb-3">Our team will get back to you within 24 Hours.</p>
                <input className="mb-4" type="text" placeholder="First Name" />
                <input className="mb-4" type="text" placeholder="Last Name" />
                <input className="mb-4" type="text" placeholder="Email Address" />
                <input className="mb-4" type="text" placeholder="Phone Number" />
                <input className="mb-4" type="text" placeholder="Subject" />
                <textarea className="mb-5" placeholder="Write your message in here" name="" id=""></textarea>
                <div>
                  <button className="submit-btn mb-5">sumbit</button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ maxWidth: "455px" }}>
                <h1 className="text-left mb-3">Or Feel free to contact us on:</h1>
                <div className="mb-3">
                  <div className="mb-3" style={{ display: "flex", gap: "10px" }}>
                    <img src="/assets/icons/phone.svg" alt="" />
                    <p>800 (SILWANA) 7459262</p>
                  </div>
                  <div className="mb-3" style={{ display: "flex", gap: "10px" }}>
                    <img src="/assets/icons/mobile_small.svg" alt="" />
                    <p>+971 58 555 3233</p>
                  </div>
                  <div className="mb-3" style={{ display: "flex", gap: "10px" }}>
                    <img src="/assets/icons/email_small.svg" alt="" />
                    <p>Info@MetaGols.com</p>
                  </div>
                </div>
                <h1 className="text-left mb-3">Visit Us:</h1>
                <div className="mb-3" style={{ display: "flex", gap: "10px" }}>
                  <img src="/assets/icons/location.svg" alt="" />
                  <p>Al-Barsha First, Yes Business Tower, Office: 709 DXB/ UAE</p>
                </div>
                <div className="mb-3">
                  <div className="map">
                    <MapComponent />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
