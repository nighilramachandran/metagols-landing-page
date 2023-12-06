import React from "react"
import { useRef } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./index.scss"
import { Col, Row } from "react-bootstrap"
import { Contactus } from "src/components/contactus"
import axios from "axios"

export const JoinOurTeam = () => {
  const onFileUpload = () => {
    // debugger
  }
  return (
    <div id="joinOurTeam">
      <div>
        <img className="top_right_j" src="/assets/images/top_oval_right_general.png" alt="" />
        <h1>Join Our Team</h1>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <p style={{ maxWidth: "729px" }}>
            We Activly searching for the High-End talented people arround the world specially from the Arabs countries, Lets say
            welcome abourd for you !
            <br />
            <br /> Our team will get back to you once we check our requirments
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form className="submit-form" style={{ width: "1048.68px" }}>
            <div>
              <div className="radio-group-wrap mb-5">
                {["Illustration", "Web Design", "Mobile Design", "Development", "Motion Graphic", "Other"].map((el) => (
                  <div className="form-group-radio mb-3">
                    <input type="radio" />
                    <label>{el}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="test mb-3">
              <input className="mb-3" type="text" placeholder="First Name" />
              <input className="mb-3" type="text" placeholder="Last Name" />
              <input className="mb-3" type="text" placeholder="Email Address" />
              <input className="mb-3" type="text" placeholder="Phone Number" />
              <input className="mb-3" type="text" placeholder="Title" />
              <input style={{ width: "100%" }} className="mb-3" type="file" placeholder="file upload" />
            </div>
            <div className="mb-5">
              <textarea placeholder="Why to choose you ?"></textarea>
            </div>
            <button className="submit-btn mb-5">sumbit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
