import React from 'react';
import './weatherApp.css';

import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const WeatherApp = () => (
  <div className="container">
    <div className="top-bar">
      <input type="text" placeholder="Search for places" className="CityInput" />
      <div className="search-icon">
        <img src={search_icon} alt="search_icon" />
      </div>
    </div>
  </div>
);

export default WeatherApp;
