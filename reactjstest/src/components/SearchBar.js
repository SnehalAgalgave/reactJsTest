import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <input className='searchInput icnRhtMrgn'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
