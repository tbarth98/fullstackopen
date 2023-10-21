import Country from './Country';

const Countries = ({ countries, setCountry }) => {
  if (!countries) return null;
  if (countries.length > 10) return <p>Too many matches, specify another filter</p>;
  if (countries.length === 1) return <Country country={countries[0]} />;

  return (
    <>
      {countries.map((country) => (
        <p key={country.name.common}>
          {country.name.common} &nbsp;
          <button onClick={() => setCountry(country.name.common)}>show</button>
        </p>
      ))}
    </>
  );
};

export default Countries;
