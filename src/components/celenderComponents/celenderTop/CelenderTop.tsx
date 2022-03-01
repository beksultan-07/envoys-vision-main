import React from 'react'
import { Flex } from '../../../uikit/uikit'
import styled from "styled-components";
import calendar from '../celenderTop/img/calendar.svg'
import lupa from '../celenderTop/img/lupa.svg'

const Wrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`

const Search = styled.input`
  padding: 22px 102px 22px 20px ;
  width: 100%;
  border-style: none;
  background: #F1f1f1;
  border-radius: 8px;
  outline: none;
  &::placeholder{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #969696;
  }
`

const SearchBLock = styled.div`
    position: relative;
  width: 270px;
  
`

const Lupa = styled.span`
    position: absolute;
  width: 18px;
  height: 18px;
  background: url(${lupa});
  top: 20px;
  right: 20px;
`


const Day = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #101010;
  margin-right: 26px;
  &:last-child{
    margin-right: 0;
  }
`

const Calendar = styled.div`
  padding: 19px 25px 21px;
  background: #F1F1F1;
  max-width: 70px;
  border-radius: 8px;
`

const CelenderTop:React.FC = () => {
    const days = ['Пт, 28 янв.', 'Пн, 07 фев.', 'Пт, 04 фев.', 'Чт, 03 фев.', 'Ср, 2 фев.']
  return (
   <Wrapper>
       <Flex style={{width:'100%'}} align="center" justify='space-between'>
           <SearchBLock>
               <Search placeholder='Введите название'/>
               <Lupa/>
           </SearchBLock>
           <Flex style={{ background:'#F1F1F1', borderRadius: '8px', padding: '21px 26px'}} justify={'space-between'}>
               {
                   days.map((el, idx) => (
                       <Day>{el}</Day>
                   ))
               }
           </Flex>

           <Calendar><img src={calendar} alt=""/></Calendar>

       </Flex>
   </Wrapper>
  )
}

export default CelenderTop