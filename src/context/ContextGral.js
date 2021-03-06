import React, { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';


export const ContextGral = createContext();

export const ProviderContextGral = ({children}) => {
  const [ lang, setLang] = useState('en')
  const [ , i18n ] = useTranslation("global")
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const onChangeLang = (lang) => {

    i18n.changeLanguage(lang);
    if(lang === 'en' ){
      setLang('en')
    }else{
      setLang('es')
    }
  }

	return (
		<ContextGral.Provider
			value={{ onChangeLang, lang, setLang, error,
               setError, loading, setLoading}}
		>
    {children}
		</ContextGral.Provider>
	);
};