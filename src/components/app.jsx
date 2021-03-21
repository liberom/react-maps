import React, { Component } from 'react';

import flatsData from '../data/flats.js';
import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    // this.props = {
    //   // flatStyle: {
    //   //   background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url({this.state.imageUrl};);
    //   // }
    // }

    this.state = {
      flats: flatsData,
      selectedLat: null,
      selectedLon: null,
      selectedPrice: null,
      // imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg"
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    }
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
        <FlatList flats={this.state.flats} selectFlat={this.showMarker} />
        <div className="map-container" >
          <SimpleMap center={this.state.center} zoom={this.state.zoom} lat={this.state.selectedLat} lon={this.state.selectedLon} price={this.state.selectedPrice} />
        </div>
      </div>
    );
  }
}

export default App;
