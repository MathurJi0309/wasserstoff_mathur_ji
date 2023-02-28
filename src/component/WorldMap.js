import React from "react"
import { Annotation ,ComposableMap, Geographies, Geography,Marker ,ZoomableGroup } from "react-simple-maps"
import {geoWinkel3} from "d3-geo-projection";
import { useState } from "react";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function WorldMap() {

    const width = 900;
const height = 450;
const projection = geoWinkel3()
  .translate([width / 2, height / 2])
  .scale(140)

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

 
  function handleMoveEnd(position) {
    setPosition(position);
  }
  return (
    <div className="container-fluid">
        <ComposableMap width={width} height={height} projection={projection}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
      <Geographies geography={geoUrl} className="colorworld">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#F4C430" stroke="#124536"/>
          ))
        }
    </Geographies>
    <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Paris"}
        </text>
      </Annotation>
      <Marker coordinates={[-102, 38]} fill="#800000">
        {/* <text textAnchor="middle" fill="#FFFFFF">
          USA
        </text> */}

      </Marker>
      <Marker coordinates={[-103, 25]} fill="#777">
        <text textAnchor="middle" fill="#F53">
          Mexico
        </text>
      </Marker>
      <Marker coordinates={[-74.006, 40.7128]} fill="#800000">
      <text textAnchor="middle" fill="#F53">
          Mexico
        </text>
        <circle r={8} fill="#F53" />
      </Marker>
      </ZoomableGroup>
    </ComposableMap>
    </div>
)
}


// import React, { memo } from "react";
// import {
//   ZoomableGroup,
//   ComposableMap,
//   Geographies,
//   Geography
// } from "react-simple-maps";

// const MapChart = ({ setTooltipContent }) => {
//   return (
//     <div data-tip="">
//       <ComposableMap>
//         <ZoomableGroup>
//           <Geographies geography="/features.json">
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   onMouseEnter={() => {
//                     setTooltipContent(`${geo.properties.name}`);
//                   }}
//                   onMouseLeave={() => {
//                     setTooltipContent("");
//                   }}
//                   style={{
//                     default: {
//                       fill: "#D6D6DA",
//                       outline: "none"
//                     },
//                     hover: {
//                       fill: "#F53",
//                       outline: "none"
//                     },
//                     pressed: {
//                       fill: "#E42",
//                       outline: "none"
//                     }
//                   }}
//                 />
//               ))
//             }
//           </Geographies>
//         </ZoomableGroup>
//       </ComposableMap>
//     </div>
//   );
// };

// export default memo(MapChart);
