import React, {Suspense} from 'react';
import { Route, Routes } from "react-router";

import DividendC from './pages/dividendCalendar/DividendC';
import EarningC from './pages/earningsCalendar/EarningC';
import Home from './pages/home/Home';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import { useLocation } from 'react-router-dom'
import HeaderSwiperBase from './components/homeComponents/headerSwiper/HeaderSwiperBase';
import Company from './pages/Company/Company';
import Listing from "./pages/Listing/Listing";
import Clearing from "./pages/clearing/Clearing";
import News from './pages/News/News';



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
    <Suspense fallback={'Loader...'} className="App">
      <Header/>
      {showSwiper?<HeaderSwiperBase/>:<></>}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/listing/company" element={<Company/>}/>
        <Route path="/clearing" element={<Clearing/>}/>
        <Route path="/news&analytics" element={<News/>}/>
        <Route path="/earningcalendar" element={<EarningC/>}/>
        <Route path="/dividendcalendar" element={<DividendC/>}/>
      </Routes>

      <Footer/>
    </Suspense>
  );
}

export default App;
