import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {API_KEY2} from '../utils/config';
import Chart from '../components/Chart';

const TickerDetail = () => {
  const [details, setDetails] = useState('');
  const params = useParams();

  useEffect(() => {
    axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.id}&apikey=${API_KEY2}`)
    .then(response => {
      // console.log(response.data)
      setDetails(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[params.id]);


  return (
    <div> 
      {details && 
      <div className="container"> 
      <a href="/" className="btn btn-outline-light" role="button" aria-pressed="true">Back</a>
        <h1>{details.Name}</h1>
        {details.Description}  
        <figure>
          <table className="table">
            <thead>
              <tr>
                <th>Market Cap</th>
                <th>Shares Outstanding</th>
                <th>Book Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{details.MarketCapitalization}</td>
                <td>{details.SharesOutstanding}</td>
                <td>{details.BookValue}</td>
              </tr>
              <tr>
                <th>PE Ratio</th>
                <th>PEG Ratio</th>
                <th>EBITDA</th>
              </tr>
              <tr>
                <td>{details.PERatio}</td>
                <td>{details.PEGRatio}</td>
                <td>{details.EBITDA}</td>
              </tr>
              <tr>
                <th>Revenue TTM</th>
                <th>Gross Profit TTM</th>
                <th>Diluted EPSTTM</th>
              </tr>
              <tr>
                <td>{details.RevenueTTM}</td>
                <td>{details.GrossProfitTTM}</td>
                <td>{details.DilutedEPSTTM}</td>
              </tr>
              <tr>
                <th>Analyst Target Price</th>
                <th>Trailing PE</th>
                <th>Forward PE</th>
              </tr>
              <tr>
                <td>{details.AnalystTargetPrice}</td>
                <td>{details.TrailingPE}</td>
                <td>{details.ForwardPE}</td>
              </tr>
            </tbody>
          </table>
          <figcaption>Table: Overview of {details.Name}</figcaption>
        </figure>       
        <Chart testSearch={params.id}/>
    </div>     

      }

  </div>
  )
};

export default TickerDetail;