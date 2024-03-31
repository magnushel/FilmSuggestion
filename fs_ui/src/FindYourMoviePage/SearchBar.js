import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search for a movie" className="search-input"/>
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;