import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map( this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return (
      <div>
        <div ref="map" className="gmaps"></div>
        <div className="voffset2">City: { this.props.city }</div>
      </div>
    )
  }
}

export default GoogleMap;
