import React, { Component }from 'react';
import axios from 'axios';


export default class TextSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text:"",
      latitude:null,
      longitude:null
    }
    // this.latLng = this.latLng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.findAddress = this.findAddress.bind(this);

  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(this.findAddress);
  // }
  //
  // findAddress({ coords: { latitude, longitude } }) {
  //   this.setState({ latitude, longitude });
  // }

  handleChange(event) {
    event.preventDefault();
    this.setState({text:event.target.value});
  }

  handleSubmit() {
    const api_key = "AIzaSyA6cxpB5JE2RFMvqLEvrCe8Z4gijZSb6vY";
    let query = this.state.text.split(' ').join("+");
    let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=${query}&location=${this.state.latitude},
    ${this.state.longitude}&radius=1000&key=${api_key}`
    axios.get(url)
    .then(data => {
      console.log(data)
    })


  }

  render(){
    console.log(this.state.latitude)
    console.log(this.state.longitude)
    return(
      <div>
        <form>
          <label>
              Place:
              <input type="text" name="place" onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}
