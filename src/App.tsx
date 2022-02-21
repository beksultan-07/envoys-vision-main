import React from 'react';
import { Route, Routes } from "react-router";
import DividendC from './pages/dividendCalendar/DividendC';
import EarningC from './pages/earningsCalendar/EarningC';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/earningCelender" element={<EarningC/>}/>
        <Route path="/dividendCelender" element={<DividendC/>}/>
      </Routes>
    </div>
  );
}

export default App;
