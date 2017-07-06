import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Chart                from '../components/chart';
import { GoogleMap }        from '../components/google_maps';

class WeatherList extends Component {

  render() {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
        <tbody>
            { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const temps        = cityData.list.map(weather => weather.main.temp)
    const pressure     = cityData.list.map(weather => weather.main.pressure)
    const humidity     = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord;




    return (
      <tr key={cityData.city.name}>
        <td> <GoogleMap lat={lat} lon={lon} /> </td>
        <td> <Chart data={temps}    color='green' units='K'   ></Chart> </td>
        <td> <Chart data={pressure} color='red'   units='hPA' ></Chart> </td>
        <td> <Chart data={humidity} color='blue'  units='%'   ></Chart> </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
