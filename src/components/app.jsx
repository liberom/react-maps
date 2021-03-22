import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flatsData from '../data/flats.js';
import FlatList from './flat_list.jsx';

import Marker from './marker.jsx';
// import SimpleMap from './map.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flatsData,
      selectedLat: null,
      selectedLon: null,
      selectedPrice: null,
      center: {
        lat: 48.88,
        lng: 2.34
      },
      zoom: 11
    }
  }

  center() {
    return {
      lat: this.state.center.lat,
      lng: this.state.center.lng
    };
  }

  showMarker = (lat, lon, price) => {
    this.setState({
      selectedLat: lat,
      selectedLon: lon,
      selectedPrice: price,
      center: {
        lat: lat,
        lng: lon
      }
    });

  }

  render() {
    return(
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.showMarker} // selectedFlat={}
        />
        <div className="map-container" >
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={this.state.zoom} // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          >
          <Marker lat={this.state.selectedLat} lng={this.state.selectedLon} text={this.state.selectedPrice} />
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

// <SimpleMap center={this.state.center} zoom={this.state.zoom} lat={this.state.selectedLat} lon={this.state.selectedLon} price={this.state.selectedPrice} />
