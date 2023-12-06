import React, { useState, useEffect } from "react"
import Lottie from "react-lottie"

export const LottieLazyLoad = ({ url }) => {
  const [data, setData] = useState(undefined)

  const getdata = async () => {
    const imageData = await fetch(url).then(async (res) => await res.json())
    setData(imageData)
  }

  useEffect(() => {
    getdata()
  }, [])

  const clickHandler = (e) => {
    e.preventDefault()
    this.setState({
      isStopped: false,
      Animated: 0,
    })
    console.log("clicked")
  }

  return (
    <>
      {data !== undefined ? (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: data,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          isClickToPauseDisabled={true}
          onClick={clickHandler}
        />
      ) : null}
    </>
  )
}
