import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import {API_KEY} from './utils/config';
import Chart from './components/Chart';

const App = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    // use later
    // http://api.marketstack.com/v1/tickers?access_key=${API_KEY}
    axios.get('http://localhost:3001/data')
    .then(response => {
      const data = response.data;
      const slice = data.slice(offset, offset + perPage)
      setData(slice)
      setPageCount(Math.ceil(data.length / perPage))
    })
    .catch(error => {
      console.log(error)
    })
  }, [offset, perPage])

// handle pagination buttons
const handlePageClick = e => {
  const selectedPage = e.selected;
  console.log('selectedPage', selectedPage)
  setOffset(selectedPage + 1)
};

// handle search bar
const handleChange = e => {
  setSearch(e.target.value);
  setName(e.target.value)
};

// handle form submit
const handleSubmit = e => {
  e.preventDefault();
  setName(e.target.value)
}

const filteredTickers = data.filter(dataFiltered => dataFiltered.name.toLowerCase().includes(search.toLowerCase()))


  return(
    <div className="App">
      <div className="ticker-search">
        <h1>Search a Ticker!</h1>
        <form onSubmit={handleSubmit}>
          <input className="ticker-input" placeholder="search" onChange={handleChange}/>
        </form>
      </div>
     <Pagination data={data} pageCount={pageCount} offset={offset} handlePageClick={handlePageClick} filteredTickers={filteredTickers}/>
     <Chart name={name}/>
    </div>
  )
};

export default App



