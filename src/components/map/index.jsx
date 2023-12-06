import React, { useState } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import "./index.scss"

const containerStyle = {
  width: "100%",
  height: "400px",
}
// 25.1117826,55.2039067

const center = {
  lat: 25.1117826,
  lng: 55.2039067,
  //   lat: 18.559008,
  //   lng: -68.388881,
}

export const MapComponent = () => {
  const [zoom, setzoom] = useState(17)
  const { isLoaded } = useJsApiLoader({
    id: "google-map",
    googleMapsApiKey: "AIzaSyAD6Ro5trYroHIf57V1SxE9-TMIC2AwwSw",
  })
  const defaultOptions = {
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    // keyboardShortcuts: false,
  }

  return isLoaded ? (
    <GoogleMap
      defaultOptions={defaultOptions}
      mapContainerStyle={containerStyle}
      options={{
        ...defaultOptions,
      }}
      center={center}
      defaultCenter={center}
      defaultZoom={zoom}
      zoom={zoom}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <>Loading map...</>
  )
}
