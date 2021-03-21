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
      imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg"
      // selectedFlatPrice: 200
    }
  }

  render() {
    return(
      <div>
        <FlatList flats={this.state.flats} imageUrl={this.state.imageUrl} />
        <div className="map-container" >
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
