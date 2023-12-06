import React, { useState } from "react"
import "../../index.scss"
import "./index.scss"
import Slider from "react-slick"
import { Row, Col } from "react-bootstrap"

export const Carousel = () => {
  const [imageIndex, setimageIndex] = useState(0)
  const carouselData = [
    { name: "Idea", icon: "idea", key: 1 },
    { name: "Wireframe", icon: "wireframe", key: 2 },
    { name: "Sketching", icon: "sketching", key: 3 },
    { name: "Design", icon: "design", key: 4 },
    { name: "Coding", icon: "coding", key: 5 },
    { name: "Building", icon: "building", key: 6 },
    { name: "Testing", icon: "testing", key: 7 },
    { name: "Presentation", icon: "presentation", key: 8 },
    { name: "Marketing", icon: "marketing", key: 9 },
  ]

  function NextArrow(props) {
    const { className, style, onClick } = props
    return (
      <button className="carousel-btn">
        <img
          src="/assets/icons/right-arrow-carousel.svg"
          style={{ position: "absolute", zIndex: "1", right: "19px", top: "-29px" }}
          alt=""
          onClick={onClick}
        />
      </button>
    )
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <button className="carousel-btn">
        <img
          src="/assets/icons/left-arrow-carousel.svg"
          style={{ position: "absolute", zIndex: "1", left: "19px", top: "-29px" }}
          alt=""
          onClick={onClick}
        />
      </button>
    )
  }

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    dot: false,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerpadding: 0,
    // autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setimageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <React.Fragment>
      <div id="Carousel">
        <h3>CONSTRUCTION PROCESS</h3>
        <h1>Everything has a Beginning</h1>

        <Slider {...settings}>
          {carouselData.map((el, idx) => (
            <div className={idx === imageIndex ? `slide activeSlide ${el.key === 5 ? "coding" : ""}` : "slide"} key={el.key}>
              <div className={el.key === 5 ? "coding" : ""}>
                <div className={`carousel-contents`}>
                  <div>
                    <img style={{ paddingBottom: "10px" }} src={`/assets/icons/${el.icon}.svg`} alt="" />
                    <p>{el.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <Slider {...settings}>
          {carouselData.map((el, idx) => (
            <div className="carousel-wrapper">
              <div className="carousel-contents">
                <div>
                  <img style={{ paddingBottom: "10px" }} src={`/assets/icons/${el.icon}.svg`} alt="" />
                  <p>{el.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
    </React.Fragment>
  )
}
