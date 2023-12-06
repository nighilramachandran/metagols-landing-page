import React from "react"
import "../../index.scss"
import "./index.scss"

export const Download = () => {
  return (
    <React.Fragment>
      <div id="Download">
        <h1>Available on</h1>
        <p style={{ paddingTop: "20px" }}>We are working 24/7 to provide the best experience</p>
        <p>to our users</p>
        <div>
          <div className="dowload_download_items">
            {/* <a href="https://play.google.com/store/apps/details?id=com.metagols.connect" target="_blank"> */}
            <section className="svg-container-download">
              <svg viewBox="0 0 308 99" className="rect">
                <g>
                  <rect className="foreground download" rx="7.8" />
                </g>
              </svg>
              <div className="download-wrapper">
                <img src="/assets/images/logo-google-playstore.svg" alt="" />
                <div className="download-wrapper-inner">
                  <p>Get In</p>
                  <h2>Google Play</h2>
                </div>
              </div>
            </section>
            {/* </a> */}
            {/* <a href="https://apps.apple.com/ae/app/metaconnect-app/id1605467938" target="_blank"> */}
            <section className="svg-container-download">
              <svg viewBox="0 0 308 99" fill="none" className="rect">
                <g>
                  <rect className="foreground download" rx="7.8" />
                </g>
              </svg>
              <div className="download-wrapper">
                <img src="/assets/images/apple-logo.svg" alt="" />
                <div className="download-wrapper-inner">
                  <p>Download on</p>
                  <h2>Apple Store</h2>
                </div>
              </div>
            </section>
            {/* </a> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
