import React from "react"
import "../../index.scss"
import "./index.scss"

import { Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Service = () => {
  const comercialserviceData = [
    { icon: "company", message: "Companies And Organization Needs", key: 1 },
    { icon: "videoandvoice", message: "Video & Voice Conferencing", key: 2 },
    { icon: "team", message: "Team Organizer", key: 3 },
    { icon: "employee", message: "Employee and Employers", key: 4 },
    { icon: "calender", message: "Calendar", key: 5 },
  ]
  const individualserviceData = [
    { icon: "trading", message: "Trading Platform", key: 1 },
    { icon: "game", message: "Games Platform", key: 2 },
    { icon: "learning", message: "Learning System", key: 3 },
    { icon: "thumb", message: "Social Network Platform", key: 4 },
  ]
  let navigate = useNavigate()

  return (
    <React.Fragment>
      <div id="service">
        <h4>Services Of</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>MetaGols</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ maxWidth: "716px" }}>
            The advantage of METAGOLS is that it provides all known and unkown services to users , in easy and convenient ways to
            use . METAGOLS aims to turn social networs into a means to gain benefits in all respects
          </p>
        </div>
        <h1>Commercial Services</h1>

        <div className="d-flex flex-row flex-wrap justify-content-around mb-5">
          {comercialserviceData.map((el) => (
            <div className={"mb-3"} key={el.key}>
              <div className="service-card-wrapper">
                <div className="service-card-content">
                  <img src={`/assets/icons/${el.icon}.svg`} alt="" />
                  <p>{el.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1>Individuals Services</h1>
        <div className="d-flex flex-row flex-wrap justify-content-around mb-5">
          {individualserviceData.map((el) => (
            <div className={"mb-3"} key={el.key}>
              <div className="service-card-wrapper">
                <div className="service-card-content">
                  <img src={`/assets/icons/${el.icon}.svg`} alt="" />
                  <p>{el.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => navigate("/features")} className="service_btn">
          Check full Feauture
        </button>
      </div>
    </React.Fragment>
  )
}
