import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";
import offerPropType from "../types/offer";

import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.props.offers.forEach((offer) => {
      leaflet
        .marker(offer.location, {icon})
        .addTo(map);
    });
  }

  render() {
    return <div id="map" style={{width: `100%`, height: `100%`}} />;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired
};

export default Map;
