import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n ] = useTranslation("global")
  return(
    <h1>{t('header.hello_world')}</h1>
  )
}
 
export default Header;