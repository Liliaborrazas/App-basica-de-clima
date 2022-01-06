import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ContextGral } from '../../context/ContextGral';
import { Loader } from '../loader/Loader';
import { Message } from '../message/Message';
import { helpHttp } from '../../helpers/helpHttp';
import { api } from '../../utils/api';
import './selected.css';

const Selected = ({setQuery, query, setWeather, weather}) => {
  const [t, i18n ] = useTranslation("global");
  const {lang, loading, setLoading, error, setError} = useContext(ContextGral);

  
  
  
  // useEffect(() => {
  //   weatherData()
	// }, [lang]);

  ///Falta el Readme,
  let url= `${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=${lang}`;
  

  const weatherData = async() => {
    setLoading(true);
    helpHttp().get(url).then(res=> {
      if(!res.err){
        setWeather(res);
        setQuery('');
        setError(null);
      }else{
        setWeather([]);
        setError(res)
      }
      });
    setLoading(false);
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
        {loading && <Loader/>}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor={'#dc3545'}/>}        
    </div>
    </>

  )
}

export default Selected;