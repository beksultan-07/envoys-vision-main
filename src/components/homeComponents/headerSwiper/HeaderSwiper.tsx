import React from 'react'
import {  HeaderSwiperIcon, HeaderSwiperItem, HeaderSwiperS, HeaderSwiperText } from './HeaderSwiperSC'

import incr from '../../../assets/vectorUpGreen.svg'
import decr from '../../../assets/vectorDownRed.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Flex } from '../../../uikit/uikit';
import { BannerInfoDecrease, BannerInfoIncrease } from '../bannerInfo/bannerInfoSC';

const HeaderSwiper:React.FC = () => {
    const [values, setValues] = React.useState([
        {
            name: 'Бензин 80',
            value: '6 875.93',
            pos: '+193.15(2.81%)'
        },
        {
            name: 'Бензин 92',
            value: '6 875.93',
            pos: '-93.15(2.81%)'
        },
        {
            name: 'Бензин 80',
            value: '6 875.93',
            pos: '+193.15(2.81%)'
        },
        {
            name: 'Бензин 92',
            value: '6 875.93',
            pos: '-93.15(2.81%)'
        },
        {
            name: 'Бензин 80',
            value: '6 875.93',
            pos: '+193.15(2.81%)'
        },
        {
            name: 'Бензин 92',
            value: '6 875.93',
            pos: '-93.15(2.81%)'
        },
    ])

  return (
    <HeaderSwiperS>
        <Swiper
            slidesPerView={5}
            loop
            >

            {values.map((val, i) => {
                let posB = false
                if(val.pos[0] === '+'){
                    posB = true
                }
                
                return <SwiperSlide>
                    <HeaderSwiperItem>
                        <Flex align='center'>
                            <HeaderSwiperIcon src={posB?incr:decr}/>
                            <Flex direction='column'>
                                <HeaderSwiperText>{val.name}</HeaderSwiperText>
                                <Flex margin='10px 0 0 0'>
                                    <HeaderSwiperText>{val.value}</HeaderSwiperText>
                                    {!posB?<BannerInfoDecrease margin={true}>{val.pos}</BannerInfoDecrease>:<BannerInfoIncrease margin={true}>{val.pos}</BannerInfoIncrease>}
                                </Flex>
                            </Flex>
                        </Flex>
                    </HeaderSwiperItem>
                </SwiperSlide>
            })}
        </Swiper>
    </HeaderSwiperS>
  )
}

export default HeaderSwiper