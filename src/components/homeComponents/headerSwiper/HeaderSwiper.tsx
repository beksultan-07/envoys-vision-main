import React from 'react'
import {  HeaderSwiperIcon, HeaderSwiperItem, HeaderSwiperS, HeaderSwiperText } from './HeaderSwiperSC'

import incr from '../../../assets/vectorUpGreen.svg'
import decr from '../../../assets/vectorDownRed.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Flex } from '../../../uikit/uikit';
import { BannerInfoDecrease, BannerInfoIncrease } from '../bannerInfo/bannerInfoSC';

import { Autoplay, Pagination, Navigation } from "swiper";

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
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints= {{
                320: {
                    slidesPerView: 1,
                },
                497: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                }
            }
              }>

            {values.map((val, index) => {
                let posB = false
                if(val.pos[0] === '+'){
                    posB = true
                }
                
                return <SwiperSlide  key={index}>
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