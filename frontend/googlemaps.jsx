import React, { Component } from 'react';

export default class GoogleMaps extends Component {
  constructor(){
    super()

    this.state = {

    };

    this.initMap = this.initMap.bind(this)
  }
  componentDidMount() {
    this.initMap()
  }
  initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  render() {
    var mapStyle={
      width:"100%",
      height:"400px",
      backgroundColor:"grey"
    }
    return (
      <div>
        <div id="map" style={mapStyle}></div>
      </div>
    )
  }
}
