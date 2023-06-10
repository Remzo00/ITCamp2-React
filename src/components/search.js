import React from 'react';

function SearchBar({ handleSearch }) {

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    handleSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;