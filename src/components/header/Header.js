import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n ] = useTranslation("global")
  return(
    <div>
       <h1>{t('header.hello_world')}</h1>
       <button onClick={()=> i18n.changeLanguage('es')}>ES</button>
       <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
    </div>
  )
}
 
export default Header;