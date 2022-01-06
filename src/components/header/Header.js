import React, { useContext } from 'react';
import { ContextGral } from '../../context/ContextGral';
import { useTranslation } from 'react-i18next';
import './header.css';

const Header = () => {
  const [t ] = useTranslation("global")
  const { onChangeLang, lang } = useContext(ContextGral)
  
  return(
    <div className='header-container'>
       <div className='header-title'>
          <h1>{t('header.weather_480')}</h1>
       </div> 
       <div>
          <button className={`header-language__btn ${lang === 'es' ? 'bold' : ''}`} onClick={()=> onChangeLang('es')}>ES</button>
          <button className={`header-language__btn ${lang === 'en' ? 'bold' : ''}`} onClick={()=> onChangeLang('en')}>EN</button>
       </div>
    </div>
  )
}
 
export default Header;