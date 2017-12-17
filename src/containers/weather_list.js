import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
// weather list component
class WeatherList extends Component {
  renderWeather = cityData => {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>3</td>
        <td>4</td>
      </tr>
    )
  }
  // render
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
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  // .weather because thats the property name used in the combine reducer to reference the payload returned from fetchWeather action
  // weather: state.weather (ES6 syntax)
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
