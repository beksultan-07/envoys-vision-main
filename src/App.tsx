import React from 'react';
import { Route, Routes } from "react-router";

import DividendC from './pages/dividendCalendar/DividendC';
import EarningC from './pages/earningsCalendar/EarningC';
import Home from './pages/home/Home';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeaderSwiper from './components/homeComponents/headerSwiper/HeaderSwiper';
import Listing from "./pages/listing/Listing";


function App() {
  return (
    <div className="App">
      {/*<Header/>*/}

      <Routes>
        <Route path="/" element={<Listing/>}/>
        <Route path="/earningCelender" element={<EarningC/>}/>
        <Route path="/dividendCelender" element={<DividendC/>}/>
      </Routes>

      {/*<Footer/>*/}
    </div>
  );
}

export default App;
