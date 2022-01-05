import React, { useState} from 'react'
import Header from './components/header/Header';
import Date from './components/date/Date';
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
                <Date/>
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
