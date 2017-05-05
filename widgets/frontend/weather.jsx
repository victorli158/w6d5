import React from 'react'

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {city: '', temp: ''};
  }

  componentDidMount() {
    let that = this;

    navigator.geolocation.getCurrentPosition(function(position) {
      that.position = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };
      that.fetchWeather();
    });
  }

  fetchWeather() {
    const xhr = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.position.lat}&lon=${this.position.lon}&APPID=830264a4fe2bb566aad5efcf58c29b66`;
    xhr.open('get',url);
    xhr.onload = function() {
      let {main: {temp}, name} = JSON.parse(xhr.response);
      temp = Math.round(((temp - 273) * 9/5 + 32)*10)/10;
      this.setState({city: name, temp: temp});
    }.bind(this);
    xhr.send();
  }

  render() {
    return (
      <div className='widget'>
        <h1>Weather</h1>
          <div className='weather'>
            <div> { this.state.city } </div>
            <div> { this.state.temp } Degrees </div>
          </div>
      </div>
    )
  }
}

export default Weather;
