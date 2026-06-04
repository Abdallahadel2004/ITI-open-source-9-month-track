import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value); 
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input 
        type="text" 
        placeholder="Search movies..." 
        value={searchInput} 
        onChange={handleChange} 
        className="search-input"
      />
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
}

export default Search;

