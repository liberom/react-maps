import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    // console.log(event.target.attributes.lat.value);
    this.props.selectFlat(event.target.attributes.lat.value, event.target.attributes.lon.value, event.target.attributes.price.value);
  }

  render() {
    return(
      <div className="card" onClick={this.handleClick} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl})`}}>
        <div className="card-category" >
          {this.props.price} EUR
        </div>
        <div className="card-description" >
          <h2> {this.props.name} </h2>
        </div>
        <a className="card-link" href="#" lat={this.props.lat} lon={this.props.lon} price={this.props.price} ></a>

      </div>
    );
  }
}

export default Flat;
