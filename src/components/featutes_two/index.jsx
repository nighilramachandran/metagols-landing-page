import React from "react"
import { Col } from "react-bootstrap"
import "../../index.scss"
import "./index.scss"
import { LottieLazyLoad } from "../lottie-lazyload/LottieLazyLoad"

export const Features_Two = () => {
  return (
    <React.Fragment>
      <div id="features_two_wrapper" className="column_reverse">
        <Col>
          <h4>Features</h4>
          <h1>Hologram Technology</h1>
          <h5>In simple terms, its a three-dimensional projection</h5>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "800px" }}>
              <p>
                Which can be seen without using any special equipment such as cameras or glasses , The image can be viewed from
                any angle , so as the user walks around the display the object will appear to move and shift realistically .
                Holographic images can be static , such as picture of a product , or they may be animated sequences which can be
                watched by multiple people from any viewpoint .
              </p>
              <p>
                The technology used a capture and project Holograms has advances rapidly in recent years , These latest techniques
                allow increasingly convincing and interactive models to be displayed and are expected to become even more
                widespread in the future
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <LottieLazyLoad url="/lotties/hologram.json"/>
        </Col>
      </div>
    </React.Fragment>
  )
}
