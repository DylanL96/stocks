import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount, handlePageClick, filteredTickers}) => {
  // console.log(filteredTickers)

  return(
  <div>{filteredTickers.length > 0 ? (
    <div className="ticker-container">
      <div className="ticker-header">
        <p>Company Name</p>
        <p>Ticker</p>
        <p>Stock Exchange</p>
        <p>Country</p>
      </div>
      {filteredTickers.map(d=>
        <div className="ticker-row" key={d.symbol}>
          <div className="ticker">
            <h3>{d.name}</h3>
          </div>
          <div className="ticker-symbol">
            <h3>{d.symbol}</h3>
          </div>
          <div className="ticker-exchange">
            <h3>{d.stock_exchange.name}</h3>
          </div>
          <div className="ticker-country">
            <h3>{d.stock_exchange.country}</h3>
          </div>
        </div>)}
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
    </div> ) : (<div>No Ticker Found</div>)}
  
  </div>
  )
};

export default Pagination;