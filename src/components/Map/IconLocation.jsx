import L from "leaflet";

export const IconLocation = L.icon({
  iconUrl: require("../../assets/images/icon.svg"),
  iconRetinaUrl: require("../../assets/images/icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
