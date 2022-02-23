import React from 'react';
import { Route, Routes } from "react-router";

import DividendC from './pages/dividendCalendar/DividendC';
import EarningC from './pages/earningsCalendar/EarningC';
import Home from './pages/home/Home';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Listing from './pages/Listing/Listing';
import { useLocation  } from 'react-router-dom'
import HeaderSwiperBase from './components/homeComponents/headerSwiper/HeaderSwiperBase';
import Company from './pages/Company/Company';


function App() {
  const [showSwiper, setShowSwiper] = React.useState(true)

  const location = useLocation() 
  
  React.useEffect(() => {
    if(location.pathname === '/' || location.pathname.toLowerCase() === '/home'){
      setShowSwiper(false)
    }else{
      setShowSwiper(true)
    }
  }, [location])
  


  return (
    <div className="App">
      <Header/>
      {showSwiper?<HeaderSwiperBase/>:<></>}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Listing" element={<Listing/>}/>
        <Route path="/Listing/Company" element={<Company/>}/>
        <Route path="/earningCelender" element={<EarningC/>}/>
        <Route path="/dividendCelender" element={<DividendC/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
