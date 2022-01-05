import React, { useContext } from 'react';
import { ContextGral } from '../../context/ContextGral';
import { useTranslation } from 'react-i18next';
import './header.css';

const Header = () => {
  const [t, i18n ] = useTranslation("global")
  const { onChangeLang } = useContext(ContextGral)
  
  return(
    <div className='header-container'>
       <div className='header-title'>
          <h1>{t('header.weather_480')}</h1>
       </div> 
       <div className='header-language'>
          <button onClick={()=> onChangeLang('es')}>ES</button>
          <button onClick={()=> onChangeLang('en')}>EN</button>
       </div>
    </div>
  )
}
 
export default Header;