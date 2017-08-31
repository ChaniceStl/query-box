import React, { Component } from 'react';
import { render } from 'react-dom';

// import TextSearch from './textsearch';
import GoogleMaps from './googlemaps.jsx'


class App extends Component {
  render() {
    return (
      <div>
        hi
        <GoogleMaps />
      </div>

    )
  }
}
render(
  <App />
,document.getElementById('root'));
