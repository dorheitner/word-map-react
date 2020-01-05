import React, { useEffect, useState } from "react";
import WordMap from "./WordMap";
import axios from "../axios-coordinates";
import randomLocation from "random-location";

// Return Random Coordinate
function getRandCoordinates() {
  const P = {
    latitude: 40.7768006,
    longitude: -98.4187928
  };

  const R = 500000; // meters

  return randomLocation.randomCirclePoint(P, R);
}

export default function Coordinates() {
  const [routes, setRoutes] = useState();

  // Update the state
  function updateRoutes(routes) {
    setRoutes(routes);
  }

  // Get Random coordinates from the backend"
  useEffect(() => {
    axios
      .get("/get-coordinates")
      .then(res => {
        updateRoutes(res.data.routes);
      })

      .catch(e => console.log(e));
  }, []);

  // Select ramdom route, change there coordinates
  useEffect(() => {
    if (routes) {
      const now = new Date().getTime() + 10;
      const intervalID = setInterval(function() {
        // Copy the routes state
        const newRoutes = [...routes];

        // Get Random index from the newRoutes array
        const randRouteNumber = Math.floor(Math.random() * newRoutes.length);

        // Get random Coordinates
        const getRandomRoute = getRandCoordinates();

        //Set random coordinates to random array index
        newRoutes[randRouteNumber].latitude = getRandomRoute.latitude;

        const after = new Date().getTime();
        if (after > now) {
          clearInterval(intervalID);
          updateRoutes(newRoutes);
        }
      }, 10);
    }
  }, [routes]);

  return (
    <React.Fragment>
      {routes && (
        <WordMap
          zoom={5}
          routes={routes}
          center={{
            lat: 37.7768006,
            lng: -98.4187928
          }}
        ></WordMap>
      )}
    </React.Fragment>
  );
}
