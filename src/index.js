import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import PrivateRoutes from "./Routes"
// import {PrivateRoutes}

ReactDOM.render(
  <React.StrictMode>
    <PrivateRoutes />
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
