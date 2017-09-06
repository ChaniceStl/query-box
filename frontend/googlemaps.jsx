import React, { Component }from 'react';
import axios from 'axios';

import TextSearch from './textsearch'

export default class GoogleMaps extends Component {
  constructor() {
    super()

    this.state = {
      text:"",
      TextSearchResults:[]
    }

    this.handleChange = this.handleChange.bind(this);
    this.initMap = this.initMap.bind(this);
    this.handleLocationError = this.handleLocationError.bind(this);
    this.callback = this.callback.bind(this);

  }
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    var map, infoWindow;
     map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: -34.397, lng: 150.644},
       zoom: 10
     });
     infoWindow = new google.maps.InfoWindow;

     if (navigator.geolocation) {
       var that = this;
       navigator.geolocation.getCurrentPosition(function(position) {
       var pos = {
         lat: position.coords.latitude,
         lng: position.coords.longitude
       };

       infoWindow.setPosition(pos);
       infoWindow.setContent('Location found.');
       infoWindow.open(map);
       map.setCenter(pos);

        var pyrmont = new google.maps.LatLng(pos.lat, pos.lng);
        var request = {
          location: pyrmont,
          radius: '500',
          query: that.state.text
        };
         const service = new google.maps.places.PlacesService(map);
         service.textSearch(request, that.callback);
       }, function() {
         handleLocationError(true, infoWindow, map.getCenter());
       });
     } else {
       // Browser doesn't support Geolocation
       handleLocationError(false, infoWindow, map.getCenter());
     }
   }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
     infoWindow.setPosition(pos);
     infoWindow.setContent(browserHasGeolocation ?
                           'Error: The Geolocation service failed.' :
                           'Error: Your browser doesn\'t support geolocation.');
     infoWindow.open(map);
   }

  callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      console.log(place)
      // createMarker(results[i]);
    }
  }
}

  handleChange(event) {
    event.preventDefault();
    this.setState({text:event.target.value});
  }

  render(){
    var mapStyle={
      width:"100%",
      height:"400px",
      backgroundColor:"grey"
    }
    
    return(
      <div>
        <form>
          <label>
              Place:
              <input type="text" name="place" onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
        </form>
        <div id="map" style={mapStyle}></div>
      </div>
    )
  }
}
