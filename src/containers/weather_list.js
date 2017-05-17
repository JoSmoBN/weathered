import _                              from 'lodash';
import React, { Component }           from 'react';
import { connect }                    from 'react-redux';

import Chart                          from '../components/chart'
import GoogleMap                      from '../components/google_map'

class WeatherList extends Component {
  renderWeather( cityData ) {
    const cityName = cityData.city.name
    const temps = cityData.list.map( weather => _.round( ( weather.main.temp * 9/5 ) - 459.67 ) );
    console.log(temps)
    const pressures = cityData.list.map( weather => _.round( weather.main.pressure ) );
    const humidities = cityData.list.map( weather => _.round( weather.main.humidity ) );
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={ cityName }>
        <td>
          <GoogleMap lon={ lon } lat={ lat } city={ cityName } />
        </td>
        <td>
          <Chart data={ temps } color="green" units="K"  />
        </td>
        <td>
          <Chart data={ pressures } color="orange" units="hPa" />
        </td>
        <td>
          <Chart data={ humidities } color="pink" units="%" />
        </td>
      </tr>
    )
  }

  render() {
    return(
      <table className="table table-hover voffset7">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
            { this.props.weather.map( this.renderWeather ) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps( { weather } ) {
  console.log(weather)
  return { weather };
}

export default connect( mapStateToProps )( WeatherList )
