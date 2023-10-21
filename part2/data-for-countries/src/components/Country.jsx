import axios from 'axios';
import { useEffect, useState } from 'react';
const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${apiKey}`)
      .then((response) => setWeather(response.data))
      .catch((err) => console.log(err));
  }, []);

  const kelvinToCelcius = (kelvin) => (kelvin - 273.15).toFixed(2);

  return (
    <>
      {weather ? (
        <div>
          <h1>{country.name.common}</h1>
          <p>capital {country.capital[0]}</p>
          <p>area {country.area}</p>
          <h2>languages:</h2>
          <ul>
            {Object.entries(country.languages).map(([key, language]) => (
              <li key={key}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={country.flags.alt} />
          <h2>Weather in {country.capital[0]}</h2>
          <p>temperature {kelvinToCelcius(weather.main.temp)} Celcius</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather image' />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
};

export default Country;
