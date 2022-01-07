import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {API_KEY} from '../utils/config'

const Pagination = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)
  

  const getData = async() => {
      const res = await axios.get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${API_KEY}`);
      const data = res.data;
      const slice = data.slice(offset, offset + perPage)
      setData(slice)
      setPageCount(Math.ceil(data.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log('selectedPage', selectedPage)
    setOffset(selectedPage + 1)
};

 useEffect(() => {
   getData()
 }, [offset])
  return(
    <div className="App">
      {data.map(d=><p key={d.displaySymbol}>{d.symbol}</p>)}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/> 
    </div>
  )

};

export default Pagination