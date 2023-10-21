import { useState, useEffect } from 'react';
import Search from './components/Search';
import Countries from './components/Countries';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => setCountries(response.data))
      .catch((err) => console.log(err));
  }, []);

  const countriesToDisplay = search && countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()));

  const handleSearchChange = (input) => {
    setSearch(input);
  };

  const setCountry = (countryName) => {
    setSearch(countryName);
  };

  return (
    <>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Countries countries={countriesToDisplay} setCountry={setCountry} />
    </>
  );
}

export default App;
