import React from 'react'
import { Flex } from '../../../uikit/uikit'
import styled from "styled-components";
import calendar from './img/calendar.svg'
import lupa from './img/lupa.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const Wrapper = styled.div`
  padding: 40px 0 10px;
  max-width: 100%;
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

const InpCel = styled.input`
  border: none;
  padding: 19px 25px 21px;
  background: #F1F1F1;
  outline: none;
  border-radius: 8px;

  ::placeholder{
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #ff0000;
  }

  ::-webkit-calendar-picker-indicator {
      background: url(${calendar}) no-repeat;
      color: rgba(0, 0, 0, 0);
      opacity: 1;
      width: 20px;
    }

`

type CelenderHeaderTop = {
  setInputValue: Function
}

const CalendarTop:React.FC<CelenderHeaderTop> = (props) => {
    const days = ['Пт, 28 янв.', 'Пн, 07 фев.', 'Пт, 04 фев.', 'Чт, 03 фев.', 'Ср, 2 фев.']
    const [startDate, setStartDate] = React.useState<Date>(new Date());


  return (
   <Wrapper>
       <Flex style={{width:'100%'}} align="center" justify='space-between'>
           <SearchBLock >
               <Search placeholder='Введите название' onChange={(e) => props.setInputValue(e)}/>
               <Lupa/>
           </SearchBLock>
           <Flex style={{ maxWidth: '60%', background:'#F1F1F1', borderRadius: '8px', padding: '21px 26px'}} justify={'space-between'}>
                <Swiper loop slidesPerView={4}
                 modules={[Navigation, Autoplay]}
                        centeredSlides={true}
                        spaceBetween={-40}
                        pagination={{
                            clickable: true,

                        }}
                        navigation={true}
                        className="mySwiper"
                 >
               {days.map((el, idx) => (
                       <SwiperSlide key={idx}><Day>{el}</Day></SwiperSlide>
                   ))}
                </Swiper>
           </Flex>
           <InpCel type="date" onChange={e => setStartDate(e.target.value)}/>

       </Flex>
   </Wrapper>
  )
}

export default CalendarTop