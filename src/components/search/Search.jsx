import React from 'react';
import './Search.scss';
import searchIcon from '../../img/search.svg';

const Search = () => {
  return (
    <div className="search-container">
      <h2>Learn more about your sign.</h2>
      <div className="button-container">
        <input type="text" placeholder="Enter your sign" />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
};

export default Search;
