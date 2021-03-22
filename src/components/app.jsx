import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../data/flats.js';
import FlatList from './flat_list.jsx';

import Marker from './marker.jsx';
// import SimpleMap from './map.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    }
  }

  center() {
    return {
      lat: 48.88,
      lng: 2.34
    };
  }

  showMarker = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });

  }

  render() {
    return(
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.showMarker} selectedFlat={this.state.selectedFlat} />
        <div className="map-container" >
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12} // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          >
          <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} text={this.state.selectedFlat.price} />
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

// <SimpleMap center={this.state.center} zoom={this.state.zoom} lat={this.state.selectedLat} lon={this.state.selectedLon} price={this.state.selectedPrice} />
