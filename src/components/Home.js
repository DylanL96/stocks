import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_KEY} from '../utils/config';
import Pagination from '../components/Pagination';
import SearchFilter from '../components/SearchFilter';
// import Test from '../components/Test';

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');

  // const [testSearch, setTestSearch] = useState('');

  useEffect(() => {
    // use later
    // `http://api.marketstack.com/v1/tickers?access_key=${API_KEY}`
    axios.get(`http://api.marketstack.com/v1/tickers?access_key=${API_KEY}`)
    .then(response => {
      const data = response.data.data;
      const slice = data.slice(offset, offset + perPage)
      setData(slice)
      setPageCount(Math.ceil(data.length / perPage))
    })
    .catch(error => {
      console.log(error)
    })
  }, [offset, perPage]);

// handle pagination buttons
const handlePageClick = e => {
  const selectedPage = e.selected;
  // console.log('selectedPage', selectedPage)
  setOffset(selectedPage + 1)
};

// handle search bar
const handleChange = e => {
  setSearch(e.target.value);
  setName(e.target.value)
  console.log(e.target.value)
};

const filteredTickers = data.filter(dataFiltered => dataFiltered.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="App">
      <SearchFilter handleChange={handleChange} name={name}/>
      <Pagination data={data} pageCount={pageCount} offset={offset} handlePageClick={handlePageClick} filteredTickers={filteredTickers} name={name}/>
    </div>
  )
};

export default Home;