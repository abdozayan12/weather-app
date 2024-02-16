import React from 'react';
import './weatherApp.css';

import searchIcon from '../assets/search.png';
import clearIcon from '../assets/clear.png';
import cloudIcon from '../assets/cloud.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';
import drizzleIcon from '../assets/drizzle.png';
import humidityIcon from '../assets/humidity.png';
import windIcon from '../assets/wind.png';

const WeatherApp = () => (
  <div className="container">
    <div className="top-section">
      <input type="text" placeholder="Search for places" className="CityInput" />
      <div className="search-icon">
        <img src={searchIcon} alt="searchIcon" />
      </div>
    </div>
    <div className="weather-icon">
      <img src={cloudIcon} alt="cloudIcon" />
    </div>
    <div className="weather-info">
      <div className="temperature">25°C</div>
      <div className="city">New York</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="Humidity-Icon" />
          <div className="data">
            <div className="humidity">64%</div>
            <div className="humidity-text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="Wind-Icon" />
          <div className="data">
            <div className="humidity">18 km/h</div>
            <div className="humidity-text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WeatherApp;
