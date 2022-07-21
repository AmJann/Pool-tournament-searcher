// import React, {useRef} from 'react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import {useState, useEffect} from 'react';
// import {useLoadScript} from '@react-google-maps/api'
// import '@react-google-maps/api';
// function Map() {

// const mapContainer = useRef(null);
// const [map, setMap] = useState();
// const[options,setOptions] = useState()

// React.useEffect(() => {
//   if (mapContainer.current && !map) {
//     setMap(new window.google.maps.Map(mapContainer.current, {}));
//   }
// }, [mapContainer, map]);

// useDeepCompareEffectForMaps(() => {
//     if (map) {
//       map.setOptions(options);
//     }
//   }, [map, options]);

//   React.useEffect(() => {
//     if (map) {
//       ["click", "idle"].forEach((eventName) =>
//         window.google.maps.event.clearListeners(map, eventName)
//       );
//       if (onClick) {
//         map.addListener("click", onClick);
//       }
  
//       if (onIdle) {
//         map.addListener("idle", () => onIdle(map));
//       }
//     }
//   }, [map, onClick, onIdle]);
//   const [clicks, setClicks] = React.useState([]);
// const [zoom, setZoom] = React.useState(3); 
// const [center, setCenter] = React.useState({
//   lat: 0,
//   lng: 0,
// });

// const onClick = (e) => {
//   // avoid directly mutating state
//   setClicks([...clicks, e.latLng]);
// };

// const onIdle = (m) => {
//   console.log("onIdle");
//   setZoom(m.getZoom());
//   setCenter(m.getCenter().toJSON());
// };


//   return (
//     <>
//       <div ref={mapContainer} style={style} />
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child)) {
//           // set the map prop on the child component
//           return React.cloneElement(child, { map });
//         }
//       })}
//     </>
//   );
// }

// export default Map