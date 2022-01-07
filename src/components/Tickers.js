import React from 'react';

const Tickers = ({tickers, loading}) => {
  if(loading){
    return<h2>Loading...</h2>
  }
  // console.log(tickers)
  return <ul className="list-group mb-4">
    {tickers.map(ticker => (<li className="list-group-item" key={ticker.displaySymbol}>
      {ticker.symbol}
    </li>))}
  </ul>
};

export default Tickers;