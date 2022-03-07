import React from 'react'
import SideBar from '../../components/listingComponents/SideBar/SideBar'
import ListingC from '../../components/listingComponents/ListingC/Listing'
import { Container, Flex } from '../../uikit/uikit'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from "react-router";
import Bonds from '../Bonds/Bonds'
import IDiploms from '../IssuersDiplomas/IDiploms'


const Listing:React.FC = () => {
  return (
      <Container>
        <Flex margin='40px 0 40px 0'>
          <SideBar/>

            <Routes>
              <Route path="/listing" element={<ListingC/>}/>
              <Route path="/bonds" element={<Bonds/>}/>
              <Route path="/earningcelender" element={<IDiploms/>}/>
              <Route path="/dividendcelender" element={<DividendC/>}/>
            </Routes>
        </Flex>
      </Container>
  )
}

export default Listing