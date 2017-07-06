import React, { Component } from 'react';

export class GoogleMap extends Component {
  render() {
    //by using this.refs.map I get a direct reference to the div, actual DOM el.
    return <div ref='map' className="map"></div>
  }

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
}
