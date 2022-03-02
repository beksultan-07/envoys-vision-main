import React from 'react'
import SideBar from '../../components/listingComponents/SideBar/SideBar'
import ListingC from '../../components/listingComponents/ListingC/Listing'
import { Container, Flex } from '../../uikit/uikit'

const Listing:React.FC = () => {
  return (
      <Container>
        <Flex margin='40px 0 40px 0'>
          <SideBar/>
          <ListingC/>
        </Flex>
      </Container>
  )
}

export default Listing