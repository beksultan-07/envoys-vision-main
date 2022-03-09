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

  function getSideChoose(){
    if(listingPath === 'Листинг' || location.state== 'Листинг') {
      return <ListingC/>
    }
    if(listingPath === 'Облигации'  || location.state== 'Облигации') {
      return <Bonds/>
    }
    if(listingPath === 'Раскрытие информации компаниями' || location.state== 'Раскрытие информации компаниями') {
      return <Disclosures/>
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
        </Flex>
      </Container>
  )
}

export default Listing