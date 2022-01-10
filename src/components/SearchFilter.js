import React from 'react';

const SearchFilter = ({handleChange}) => {
  return(
    <div className="ticker-search">
      <h1>Search a Ticker!</h1>
      <form>
        <input className="ticker-input" placeholder="search" onChange={handleChange}/>
      </form>
    </div>
  )
};

export default SearchFilter;