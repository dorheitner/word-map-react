import React from "react";
import GoogleMapReact from "google-map-react";

import Marker from "../components/Marker";
import uniqid from "uniqid";

export default function WordMap(props) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAV3gmAB7j1uedhlo83B1vWymbJrI9CD0Q" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {props.routes &&
          props.routes.map(route => (
            <Marker key={uniqid()} lat={route.latitude} lng={route.longitude} />
          ))}
      </GoogleMapReact>
    </div>
  );
}
