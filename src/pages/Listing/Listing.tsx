import React from 'react'
import SideBar from '../../components/listingComponents/SideBar/SideBar'
import ListingC from '../../components/listingComponents/ListingC/Listing'
import { Container, Flex } from '../../uikit/uikit'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from "react-router";
import Bonds from '../Bonds/Bonds'
import IDiploms from '../IssuersDiplomas/IDiploms'
import Disclosures from '../Disclosures/Disclosures'


const Listing:React.FC = () => {
  const location = useLocation()
  const [listingPath, setListingPath] = React.useState('')

  React.useEffect(() => {
    console.log(location.state);
    
  }, [])
  

  function getSideChoose(){
    if(listingPath === 'Список компаний' || location.state== 'Список компаний' || listingPath === '' && location.state== '') {
      return <ListingC/>
    }
    if(listingPath === 'ESG облигации'  || location.state== 'ESG облигации') {
      return <Bonds/>
    }
    if(listingPath === 'Раскрытие информации компаниями' || location.state== 'Раскрытие информации компаниями') {
      return <Disclosures/>
    }
    if(listingPath === 'Дипломанты номинаций' || location.state== 'Дипломанты номинаций') {
      console.log('work');
      return <IDiploms/>
    }

  }

  function changeListingPath(el:string){
    setListingPath(el)
  }


  return (
      <Container>
        <Flex margin='40px 0 40px 0'>
          <SideBar changeLP={changeListingPath}/>
          
            {getSideChoose()}
            {/* <Routes>
              <Route path="/" element={<ListingC/>}/>
              <Route path="/bonds" element={<Bonds/>}/>
              <Route path="/disclosures" element={<Disclosures/>}/>
              <Route path="/diploms" element={<IDiploms/>}/>
            </Routes> */}
        </Flex>
      </Container>
  )
}

export default Listing