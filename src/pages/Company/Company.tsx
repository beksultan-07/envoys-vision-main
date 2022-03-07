import React from 'react'
import SideBar from '../../components/listingComponents/SideBar/SideBar'
import ListingC from '../../components/listingComponents/ListingC/Listing'
import { Container, Flex } from '../../uikit/uikit'
import CompanySide from '../../components/listingComponents/CompanySide/CompanySide'

const Company:React.FC = () => {
  return (
    <Container>
      <Flex margin='40px 0 40px 0'>
        <SideBar />
        <CompanySide/>
      </Flex>
    </Container>
  )
}

export default Company