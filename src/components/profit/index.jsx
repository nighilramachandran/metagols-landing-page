import React from "react"
import "../../index.scss"
import "./index.scss"
import { Col, Row } from "react-bootstrap"
import { saveAs } from "file-saver"

export const Profit = () => {
  const saveFile = () => {
    saveAs("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "example.pdf")
  }

  const data = [
    { icone: "polygon6", message: "SELL YOUR ACTUAL PRODUCTS BY METAGOLS", key: 1 },
    { icone: "polygon1", message: "Selling METAGOLS pages after they are enlarged", key: 2 },
    { icone: "polygon6", message: "Profit by promoting the videos & pages of others", key: 3 },
    { icone: "polygon1", message: "Corporate Marketing", key: 4 },
  ]

  return (
    <React.Fragment>
      <div id="profit_wrapper">
        <h4>How to profit from</h4>
        {/* style={{ width: "100%", maxWidth: "396.24px" }} */}
        <img src="/assets/images/metagolslogolarge.svg" alt="logo" />
        {/* <div className="custome_card_wrapper"> */}
        <div className="d-flex flex-row flex-wrap justify-content-around mb-5">
          {data.map((el) => (
            <div className={"mb-3"} key={el.key}>
              <div className="polygon_effect polygon_wrapper" lg={3} xs={12}>
                <div className="customecard_small">
                  <img className="polygon2" src={`/assets/images/${el.icone}.svg`} alt="" />
                  <div className="customecard_contents">
                    <h6>{el.message}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <section className="svg-container">
            <svg viewBox="0 0 238 48" className="rect">
              <rect className="foreground" rx="7.5" stroke="white" />
            </svg>
            <p>Download WhitePaper</p>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}
