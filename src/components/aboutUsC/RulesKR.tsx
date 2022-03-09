import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../../uikit/uikit'

const AboutUsLink = styled.a`
    text-transform: capitalize;
    font-family: Exo 2;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    color: #045599;
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    transition: .3s;
    margin: 10px 0;
    :hover{
      font-size: 18px;
    }
`


const RulesKR:React.FC = () => {
  return (
    <Flex direction='column'>
        <AboutUsLink target={"_blank"} href='http://cbd.minjust.gov.kg/act/view/ru-ru/1188'> Закон об акционерных обществах</AboutUsLink>   
        <AboutUsLink target={"_blank"} href='http://cbd.minjust.gov.kg/act/view/ru-ru/202677'>Закон о рынке ценных бумаг</AboutUsLink>    
        <AboutUsLink target={"_blank"} href='http://cbd.minjust.gov.kg/act/view/ru-ru/12634'>Положение о предоставлении отчетности</AboutUsLink>    

    </Flex>
  )
}

export default RulesKR