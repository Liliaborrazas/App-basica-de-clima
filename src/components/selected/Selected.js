import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ContextGral } from '../../context/ContextGral';
import './selected.css';
const Selected = ({setQuery, query, setweather, weather}) => {
  const [t, i18n ] = useTranslation("global")
  const {lang} = useContext(ContextGral)
  const api ={
    key: "058cb8e0321f2a75722ed15033adeff5",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  // useEffect(() => {
  //   weatherData()
	// }, [lang]);

  ///////////////////////////////////////
  ///ver con axios
  ////////////////////////////////////////
  ///Falta la clase bold,
  ///Falta el Readme,
  ///Cambiar nombre a componentes ejemplo el fecha
  ///Darle una vuelta al context
  /////////////////////////////////////////

  const weatherData = async() => {
      const data = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=${lang}`)      
      .then(res => res.json())
      .then(result => {
        setweather(result);
        setQuery('');
        console.log(result);
      });
  }

  return(
    <>
     <div className='selected-box'>
     <div className='selected-select__box'>
          <select className='selected-select' onChange={e => setQuery(e.target.value)} name="city">
            <option value='Madrid'>{t('main.select_a_city')}</option>
            <option value='Oviedo'>Oviedo</option>
            <option value='Madrid'>Madrid</option>
            <option value='Mar del Plata'>Mar del Plata</option>
          </select>
        </div> 
        <div>
          <button className='selected-button' onClick={weatherData}>{t('weather.search')}</button>
        </div>
    </div>
    </>

  )
}

export default Selected;