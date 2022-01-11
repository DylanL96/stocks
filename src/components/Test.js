import React, {useEffect} from 'react';
import axios from 'axios';
import Chart from '../components/Chart';

const Test = ({testSearch, setTestSearch}) => {
  // console.log('testSearch: ', testSearch)

  // get the data from the API from what the user input
  const getData = () => {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${testSearch}&apikey=JM0HCE3A9YO9E60Y`)
    .then(response => {
      console.log(response.data['Time Series (Daily)'])
    })
    .catch(error => {
      console.log(error)
    })
  }

  
  useEffect(() => {
    getData()
    // eslint-disable-next-line 
  },[testSearch])
  
  return (
     <div className="TEST-DIV">
       <input id="ticker-search" onBlur={e => setTestSearch(e.target.value)} placeholder="search a ticker"/>
       <button onClick={getData}>Search!</button>
       <Chart testSearch={testSearch}/>
     </div>
  )
};

export default Test;