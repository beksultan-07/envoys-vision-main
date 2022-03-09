import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderNavText } from '../../components/header/hedearStyledComponents'
import { Container, Flex } from '../../uikit/uikit'

function News() {

  const navigate = useNavigate()
  return (
    <Container>
        <Flex direction='column' margin='20px 0'>
            <HeaderNavText 
              style={{margin: '10px 0'}} 
              onClick={() => navigate('/dividendcalendar')}>
                Dividend Calendar
            </HeaderNavText>
            <HeaderNavText
              style={{margin: '10px 0'}}
              onClick={() => navigate('/earningcalendar')}>
                Earning Calendar
            </HeaderNavText>
        </Flex>
        
    </Container>
  )
}

export default News