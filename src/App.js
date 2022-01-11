import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import TickerDetail from './components/TickerDetail';

const App = () => {

  return(
    <div className="App">
      <Routes>
      <Route exact path ='/' element={<Home/>}/>
      <Route exact path ='/:id' element={<TickerDetail/>}/>
      </Routes>
    </div>
  )
};

export default App



