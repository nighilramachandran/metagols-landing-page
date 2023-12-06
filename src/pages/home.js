// import { Header } from "src/components/header/header"
import { Welcome } from "src/components/welcome"
import { Gogolecoin } from "src/components/gogolecoin"
import { Aboutus } from "src/components/aboutus"
import { Features } from "src/components/features"
import { Features_Two } from "src/components/featutes_two"
import { Profit } from "src/components/profit"
import { Platform } from "src/components/platform"
import { Download } from "src/components/download"
import { Contactus } from "src/components/contactus"
import { Footer } from "src/components/footer"
import { Carousel } from "src/components/carousel"
import { Service } from "src/components/service"
import { Sourceofincome } from "src/components/sourceofincome"
import { GamingFlatform } from "src/components/gamingflatform"
import { Gogolecoin_two } from "src/components/gogolcoin-two"
import React, { useEffect } from "react"
import { useRef } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../App.scss"
import { useLocation } from "react-router-dom"

export const Home = () => {
  const location = useLocation()
  const welcomeRef = useRef()
  const aboutRef = useRef()
  const contactusRef = useRef()

  function handleScrollToElementByName(name) {
    const obg = {
      about: aboutRef?.current?.offsetTop,
      contactus: contactusRef?.current?.offsetTop,
    }

    window.scrollTo({
      behavior: "smooth",
      top: obg[`${name}`],
    })
  }

  useEffect(() => {
    if (location.hash == "#aboutus") {
      handleScrollToElementByName("about")
    }
    console.log(location)
    //
  }, [location.hash])

  
  return (
    <div id="metalanding">
      <div>
        <img className="right" src="/assets/images/Oval_top_right.png" alt="" />
        {/* <Header handleScrollToElementByName={handleScrollToElementByName} /> */}
        <Welcome />
        <Gogolecoin />
      </div>
      <div>
        <img className="first-left" src="/assets/images/oval_first_left.png" alt="" />
        <div ref={aboutRef} />
        <Aboutus />
        <Features />
        <Features_Two />
      </div>
      <div>
        <img className="right_" src="/assets/images/oval_second_right.png" alt="" />
        <Carousel />
        <Service />
        <Sourceofincome />
      </div>
      <div>
        <img className="second-left" src="/assets/images/oval_first_left.png" alt="" />
        <Profit />
        <Platform />
        <GamingFlatform />
        <Gogolecoin_two />
        <Download />
        <div ref={contactusRef} />
        <Contactus />
      </div>
    </div>
  )
}
