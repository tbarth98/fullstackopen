const Search = ({ search, handleSearchChange }) => {
  return (
    <p>
      find countries
      <input value={search} onChange={(e) => handleSearchChange(e.target.value)} />
    </p>
  );
};

export default Search;
