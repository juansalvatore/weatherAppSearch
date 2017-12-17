import React, { Component } from 'react'
import { connect } from 'react-redux'
// weather list component
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
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
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
