import React, { useState} from 'react'
import Header from './components/header/Header';
import Fecha from './components/fecha/Fecha';
import Selected from './components/selected/Selected';
import Weather from './components/weather/Weather';
import { ProviderContextGral } from './context/ContextGral';

const App =() =>{
  const [query, setQuery] = useState('');
  const [weather, setweather] = useState([]);

  return (
    <>
    <ProviderContextGral>
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

    </ProviderContextGral>
    </>
  );
}

export default App;
