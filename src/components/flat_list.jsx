import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(flat => <Flat selectFlat={this.props.selectFlat} lat={flat.lat} lon={flat.lng} name={flat.name} price={flat.price} key={flat.price} imageUrl={flat.imageUrl} />);
  }

  render() {
    return(
      <div className="flat-list">{this.renderList()}</div>
    );
  }
}

export default FlatList;
