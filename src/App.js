//Archivos de variables

// export const CLOUD = "cloud";

// export const CLOUDY  = "cloudy";

// export const SUN = "sun";

// export const RAIN = "rain";

// export const SNOW = "snow";

// export const WINDY = "windy"



////Iconos
// import React from 'react';
// import WeatherIcons from 'react-weathericons';
// import PropTypes from 'prop-types';
// import './styles.css' 
// import {
//     CLOUD,
//     CLOUDY,
//     SUN,
//     RAIN,
//     SNOW,
//     WINDY,
// } from './../../constanst/weathers';


// const icons = {
//     [SUN] :"day-sunny",
//     [CLOUD]: "cloud",
//     [CLOUDY]: "cloudy",
//     [RAIN]:"rain",
//     [SNOW]:"snow",
//     [WINDY]:"windy"
//     }

// const getWeatherIcon = weatherState => {
//     const icon = icons[weatherState]

//     const sizeIcon = "4x";

//     if(icon)
//         return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
//     else
//         return <WeatherIcons clasName="wicon" name={'day-sunny'} size={sizeIcon}/>
// }
// const WeatherTemperature = ({temperature, weatherState}) => (
// <div className="weatherTemperature-cont">
//    {getWeatherIcon(weatherState)}
//     <span className="temperature">{`${temperature}`}</span>
//     <span className="temperatureType">{`Cº`}</span>
// </div>
// );

// WeatherTemperature.propTypes = {
//     temperature: PropTypes.number.isRequired,
//     weatherState: PropTypes.string.isRequired,
// }
// export default WeatherTemperature;


// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import './App.css';
// import axios from 'axios';
// //import { api }from './utils/api'

// // import axios from 'axios';

// // axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

// // axios.ChangeAxiosToken = function (token) {
// //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// // };
// // axios.ChangeAxiosLanguage = function (language) {
// //     axios.defaults.headers.common.Lang = language;
// // };

// // axios.interceptors.response.use(null, error => {
// //     if (error.response.status === 401) {
// //         logOut();
// //         window.location = 'property/login';
// //     } else {
// //         console.log('Ocurrió un error');
// //     }
// //     return Promise.reject(error);
// // });

// // export default axios;


// function App({datosConsulta}) { 
//   const api = {
//     key:'f2fde6e102cca591b31c64169d26bae2',
//     // base:'https://openweathermap.org/data/2.5/'
//     base:'http://api.openweathermap.org/data/2.5/'
//   }
//   const [t, i18n ] = useTranslation("global")
//   const[query, setQuery] = useState('') 
//   const[weather, setWeather] = useState({})
//   const [busqueda, setBusqueda] = useState({
//     city: '',
// });

// const search = (e) => {
//   // if(e.key === 'Enter'){
//     fetch(`${api.base}weather?1=${query}&units-metric&APPID=${api.key}`)
//     .then(res=> res.json)
//     .then(result=>{
//       setWeather(result);
//       setQuery('');
//       console.log(result)
//     })
//   // }

// }
// const handleChange = ({target})=>{
//     const {name, value} = target
//     setBusqueda({
//                ...busqueda,
//                [name] : value 
//            });
// }
// // const consultarClima = (e)=> {
// //     e.preventDefault();
// //     //Pasar hacia el componente principal la busqueda del usuario
// //     datosConsulta(busqueda);
// // }

//   return (
//     <div>
//         <Header/>
//         <p>
//           App de clima para prueba técnica
//         </p>
//         <button onClick={()=>search()}>click</button>
//         <div className="input-field col s12">
//                 <select onChange={handleChange} name="city">
//                     <option value="">{t('main.select_a_city')}</option>
//                     <option value="OV">Oviedo</option>
//                     <option value="MAD">Madrid</option>
//                     <option value="MDQ">Mar del Plata</option>
                  
//                 </select>
//             </div>
//     </div>
//   );
// }

// export default App;
import React, { useState} from 'react'
import Header from './components/header/Header';
import Fecha from './components/Fecha';
import { useTranslation } from 'react-i18next';
import Selected from './components/selected/Selected';
import Weather from './components/weather/Weather';


const App =() =>{
  const [t, i18n ] = useTranslation("global")
  const [query, setQuery] = useState('');
  const [weather, setweather] = useState([]);

 
  return (
    <>
      <Header/>
      <main>
          <Selected setQuery={setQuery} query={query} setweather={setweather} weather={weather}/>
          {(weather.weather != undefined) ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name},{weather.sys.country}</div>
                <Fecha/>
              </div>
             <Weather weather={weather}/>
            </div>
          ) : ('')}
      </main>
    </>
  );
}

export default App;
