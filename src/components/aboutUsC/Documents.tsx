import React from 'react'
import { Flex } from '../../uikit/uikit' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AboutUsLink = styled(Link)`
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
const Documents:React.FC =() => {
  return (
    <Flex direction='column'>
        <AboutUsLink to={'/doc/Инструкция о порядке взаиморасчетов ЕВДЭ.docx'} target="_blank" download>Инструкция о порядке взаиморасчетов ЕВДЭ</AboutUsLink>
        <AboutUsLink to={'/doc/О депозитарном обслуживании размещения новой эмиссии ЕВДЭ.docx'} target="_blank" download>О депозитарном обслуживании размещения новой эмиссии ЕВДЭ</AboutUsLink>
        <AboutUsLink to={'/doc/Положение о раскрытии.docx'} target="_blank" download>Положение о раскрытии</AboutUsLink>
        <AboutUsLink to={'/doc/Правила ведения депозитарно-клиринговых операций ЕВДЭ.docx'} target="_blank" download>Правила ведения депозитарно-клиринговых операций ЕВДЭ</AboutUsLink>
        <AboutUsLink to={'/doc/Правила торговли на ЕДВЭ.docx'} target="_blank" download>Правила торговли на ЕДВЭ</AboutUsLink>
        <AboutUsLink to={'/doc/Регламент по депозитарно-клиринговым операциям ЕВДЭ.docx'} target="_blank" download>Регламент по депозитарно-клиринговым операциям ЕВДЭ</AboutUsLink>
        <AboutUsLink to={'/doc/антиманипулирование.docx'} target="_blank" download>Aнтиманипулирование</AboutUsLink>
      </Flex>
  )
}

export default Documents