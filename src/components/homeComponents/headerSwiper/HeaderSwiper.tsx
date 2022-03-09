import React from 'react'
import {  HeaderSwiperIcon, HeaderSwiperItem, HeaderSwiperS, HeaderSwiperText } from './HeaderSwiperSC'
import axios from "axios";
import incr from '../../../assets/vectorUpGreen.svg'
import decr from '../../../assets/vectorDownRed.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Flex } from '../../../uikit/uikit';
import { BannerInfoDecrease, BannerInfoIncrease } from '../bannerInfo/bannerInfoSC';

import { Autoplay} from "swiper";

type Props = {
    swiperValues: any
}
const HeaderSwiper:React.FC<Props> = (props) => {
    const [urlReqs, setUrlReqs] = React.useState([['usd', 'kgs'], ['btc', 'usd'], ['usd', 'kgs'], ['btc', 'usd']])
    const [prices, setPrices] = React.useState<string[]>([])
    const [showSwiper, setShowSwiper] = React.useState(false)
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
        }
    ])

 
    

  return (
    <HeaderSwiperS>
        <Swiper
            loop
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true
            }}
            speed={5000}
            modules={[Autoplay ]}
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
                1100: {
                    slidesPerView: 5,
                },
                1300: {
                    slidesPerView: 6,
                }}
              }>

            {props.swiperValues.map((val:any, index:number) => {
                if(props.swiperValues.length > 0){
                    let posB = true
                    if(val.pos[0] === '-') posB = false
                    return <SwiperSlide  key={index}>
                        <HeaderSwiperItem>
                            <Flex align='center'>
                                <HeaderSwiperIcon src={posB?incr:decr}/>
                                <Flex direction='column'>
                                    <HeaderSwiperText>{val.name}</HeaderSwiperText>
                                    <Flex margin='10px 0 0 0'>
                                        <HeaderSwiperText>{val.value}</HeaderSwiperText>
                                        {!posB?<BannerInfoDecrease margin={true}>{val.pos}</BannerInfoDecrease>:<BannerInfoIncrease margin={true}>+{val.pos}</BannerInfoIncrease>}
                                    </Flex>
                                </Flex>
                            </Flex>
                        </HeaderSwiperItem>
                    </SwiperSlide>
                }
            })}
        </Swiper>
    </HeaderSwiperS>
  )
}

export default HeaderSwiper