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


type Props = {
    path: string[]
}

const HeaderSwiperBase:React.FC<Props> = (props) => {
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
    if(location.pathname === '/listing'){
        setLocationText('Список компаний')
    }else if(location.pathname === '/listing/company'){
        setLocationText('Раскрытие информации компаниями')
    }else{
        setLocationText('Страница не найдена')
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

        <Container>
            <Flex align='center' margin='40px 0 0 0' flexWrap='wrap'>
                {props.path.map((el, index) => {
                    if(index === props.path.length -1){
                        return <HeaderSwiperPath key={index}>
                        <Link to='/listing/company'>{el}</Link>
                    </HeaderSwiperPath>
                    }else{
                        return <Flex  key={index}>
                             <HeaderSwiperPath>
                                            <Link to={el}>{el}</Link>
                                    </HeaderSwiperPath>
                                    <HeaderSwiperIcon1 src={next} alt="" />
                         </Flex>
                    }
                })}
            </Flex>

            <HeaderSwiperTitle>{locationText}</HeaderSwiperTitle>

        </Container>
    </HeaderSwiperWrap>
  )
}

export default HeaderSwiperBase