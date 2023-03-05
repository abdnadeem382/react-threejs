import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [50, -5],
        scale: 1500,
      }}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[73.0479, 33.6844]}
        dx={90}
        dy={30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="80"
          y="10"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#fff"
        >
          {"Islamabad"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
