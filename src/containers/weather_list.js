import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Chart                from '../components/chart';

class WeatherList extends Component {

  render() {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
        <tbody>
            { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)


    return (
      <tr key={cityData.city.name}>
        <td> { cityData.city.name } </td>
        <td> <Chart data={temps} color='yellow'></Chart>  </td>
        <td> <Chart data={pressure} color='red'></Chart>  </td>
        <td> <Chart data={humidity} color='blue'></Chart> </td>

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
