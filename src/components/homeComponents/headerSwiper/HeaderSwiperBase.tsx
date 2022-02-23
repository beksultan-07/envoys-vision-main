import React from 'react'
import {  HeaderSwiperIcon, HeaderSwiperIcon1, HeaderSwiperItem, HeaderSwiperPath, HeaderSwiperS, HeaderSwiperText, HeaderSwiperTitle, HeaderSwiperWrap } from './HeaderSwiperSC'

import incr from '../../../assets/vectorUpGreen.svg'
import decr from '../../../assets/vectorDownRed.svg'
import next  from '../../../assets/next.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, Flex } from '../../../uikit/uikit';
import { BannerInfoDecrease, BannerInfoIncrease } from '../bannerInfo/bannerInfoSC';
import { Link, useLocation } from 'react-router-dom'


const HeaderSwiperBase:React.FC = () => {
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
    const [locationText, setLocationText] = React.useState('undefined')

  const location = useLocation() 

  React.useEffect(() => {
    if(location.pathname.toLowerCase() === '/listing'){
        setLocationText('Список компаний')
    }else{
        setLocationText('undefined')
    }
  }, [location])

  return (
    <HeaderSwiperWrap>
        <HeaderSwiperS>
            <Swiper
                loop
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

        <Container>
            <Flex align='center' margin='40px 0 0 0' flexWrap='wrap'>
                <HeaderSwiperPath>
                    <Link to='/'>Главная</Link>
                </HeaderSwiperPath>
                <HeaderSwiperIcon1 src={next} alt="" />

                <HeaderSwiperPath>
                    <Link to='#'>Продукты и услуги</Link>
                </HeaderSwiperPath>
                <HeaderSwiperIcon1 src={next} alt="" />

                <HeaderSwiperPath>
                    <Link to='#'>Листинг</Link>
                </HeaderSwiperPath>
                <HeaderSwiperIcon1 src={next} alt="" />

                <HeaderSwiperPath>
                    <Link to='#'>Список компаний</Link>
                </HeaderSwiperPath>
            </Flex>

            <HeaderSwiperTitle>{locationText}</HeaderSwiperTitle>

        </Container>
    </HeaderSwiperWrap>
  )
}

export default HeaderSwiperBase