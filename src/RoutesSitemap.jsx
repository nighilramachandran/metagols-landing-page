import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Layout } from "./widgets/layout"
import { Home } from "./pages/home"

import { Team } from "./pages/team/team"
import { Features } from "./pages/features/feature"
import { JoinOurTeam } from "./pages/join our team/joinourteam"
import { ContactusPage } from "./pages/contactus/contact"

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<div />}>
          <Route index element={<div />} />
          <Route path="#aboutus" element={<div />} />
          <Route path="team" element={<div />} />
          <Route path="features" element={<div />} />
          <Route path="join-our-team" element={<div />} />

          <Route path="contact-us" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PrivateRoutes
