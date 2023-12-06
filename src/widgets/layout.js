import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "src/components/header/header"
import { Footer } from "src/components/footer"

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main className="m-main">
        <div id="outlet">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
