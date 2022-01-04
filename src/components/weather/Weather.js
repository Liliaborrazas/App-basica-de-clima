import React from 'react';
import { useTranslation } from 'react-i18next';

const Weather = ({weather}) => {
  const [t, i18n ] = useTranslation("global")

  return(
      <div className="weather-box">
        <div className="temp-actual">{t('weather.actual_temperature')} {Math.round(weather.main.temp)}°</div>
        <div className="temp">{t('weather.maximum_temperature')} {Math.round(weather.main.temp_max)}°</div>
        <div className="temp">{t('weather.minimum_temperature')} {Math.round(weather.main.temp_min)}°</div>
        <div className="weather">{weather.weather[0].main}</div>
        <div className="weather">{weather.weather[0].description}</div>
        <img className="weather-icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='icon'/>  
      </div>
  )
}

export default Weather;
