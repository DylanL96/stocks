import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount, handlePageClick, filteredTickers, name}) => {

  return(
  <div>{filteredTickers.length > 0 ? (
    <div className="ticker-container">
      {filteredTickers.map(d=>
        <div className="ticker-row" key={d.symbol}>
            <h3>{d.name}</h3>         
            <h3>{d.symbol}</h3>
            <h3>{d.stock_exchange.name}</h3>
            <h3>{d.stock_exchange.country}</h3>
            <a className="btn btn-outline-light" href={`/${d.symbol}`}>Read more</a>
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