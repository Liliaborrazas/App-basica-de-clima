import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';

const Header = () => {
  const [t, i18n ] = useTranslation("global")
  return(
    <div className='header-container'>
       <div className='header-title'>
          <h1>{t('header.weather_480')}</h1>
       </div> 
       <div className='header-language'>
          <button onClick={()=> i18n.changeLanguage('es')}>ES</button>
          <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
       </div>
    </div>
  )
}
 
export default Header;