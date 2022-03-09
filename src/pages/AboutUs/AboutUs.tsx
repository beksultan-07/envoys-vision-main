import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Flex } from '../../uikit/uikit'
import {Link} from 'react-router-dom'
import SideBarAbout from '../../components/aboutUsC/SideBarAbout'
import Documents from '../../components/aboutUsC/Documents'
import RulesKR from '../../components/aboutUsC/RulesKR'


const AboutUs:React.FC = () => {
  const [listingPath, setListingPath] = React.useState('Внутренние документы биржи')


  function changeListingPath(el:string){
    setListingPath(el)
  }
  const loc = useLocation()


  function getSideChoose(){
    if(listingPath === 'Внутренние документы биржи') {
      return <Documents/>
    }
    if(listingPath === 'Законодательство КР' ) {
      return <RulesKR/>
    }
  }

  return (
    <Container>
      <Flex margin='30px 0'>
        <SideBarAbout changeLP={changeListingPath} activeText={listingPath}/>
        {getSideChoose()}
      </Flex>
    </Container>
  )
}

export default AboutUs