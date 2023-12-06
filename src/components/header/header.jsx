import React, { useState, useEffect } from "react"
import "./index.scss"
import { Container, Navbar, Nav } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"

export const Header = ({ handleScrollToElementByName }) => {
  let navigate = useNavigate()
  const location = useLocation()

  const aboutScroll = () => {
    if (location.hash == "#aboutus") {
      navigate("/#aboutus1")
      setTimeout(() => {
        navigate("/#aboutus")
      }, 100)
    } else {
      navigate("/#aboutus")
    }
  }

  return (
    <React.Fragment>
      <div id="header_wrapper">
        <Navbar expand="xl" className="navbar-expand-custom" variant="dark">
          <Navbar.Brand>
            <img src="/assets/images/metagolslogo.svg" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="" aria-controls="basic-navbar-nav" style={{ color: "white" }} bg="light" />
          <Navbar.Collapse className="nav_items justify-content-end" style={{ marginLeft: "auto" }}>
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => aboutScroll()}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("/features")}>Features</Nav.Link>
            <Nav.Link onClick={() => navigate("/team")}>Team</Nav.Link>
            <Nav.Link onClick={() => navigate("/contact-us")}>Contact Us</Nav.Link>
            {/* <Nav.Link onClick={() => handleScrollToElementByName("about")}>Service</Nav.Link> */}
            <div className="mobile-button-wrapper">
              <section className="svg-container">
                <svg viewBox="0 0 138 48" className="rect">
                  <g>
                    <rect className="foreground" rx="8" />
                  </g>
                </svg>
                <p>SignUp</p>
              </section>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  )
}
