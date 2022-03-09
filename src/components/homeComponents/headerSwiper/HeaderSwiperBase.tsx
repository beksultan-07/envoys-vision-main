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
import { Autoplay} from "swiper";
import axios from 'axios'




const HeaderSwiperBase:React.FC= () => {
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
    const [pathLocation, setPathLocation] = React.useState<string[]>(['home'])
    const [urlReqs, setUrlReqs] = React.useState([['usd', 'kgs'], ['btc', 'usd'], ['usd', 'kgs'], ['btc', 'usd']])
    const [showSwiper, setShowSwiper] = React.useState(false)
    const [prices, setPrices] = React.useState<string[]>([])




  const location = useLocation() 

  function pathControlls(){
    let path:string[] = []
      let pathName: string = ''
      let locPath = location.pathname 
      for(let i = 0; i < locPath.length; i++){
        pathName += locPath[i]
        if(i !== 0 && locPath[i] === '/' || i === locPath.length-1){
            path.push(pathName)
            pathName = ''
        }
      }
      let newPathLoc = []
      newPathLoc.push('Home')
      path.forEach((el, index) => {
        if(el[0] === '/'){
          el = el.slice(1)
        }
        if(el[el.length-1] === '/'){
          el = el.slice(0, el.length-1)
        }
        newPathLoc.push(el)
      })
      setPathLocation(newPathLoc)
  }

  

  React.useEffect(() => {
    // const pricesArr:string[] = []
    // urlReqs.forEach((el, index) => {
    //     axios(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${el[0]}&to_currency=${el[1]}&apikey=B60Y9G6MUFIB74BR`)
    //         .then(res => res.data)
    //         .then(res => {
    //             for(let i in res){
    //                 for(let j in res[i]){
    //                     if(j === '5. Exchange Rate'){
    //                         pricesArr.push(res[i][j])
    //                     }
    //                 }
    //             }
    //             if(pricesArr.length >= urlReqs.length){
    //                 setPrices(pricesArr)
    //                 setShowSwiper(true)
    //             }
    //         })
    // })

    pathControlls()

    if(location.pathname === '/listing'){
        setLocationText('Список компаний')
    }else if(location.pathname === '/listing/company'){
        setLocationText('Раскрытие информации компаниями')
    }else if(location.pathname === '/earningCalendar'){
        setLocationText('Earnings Calendar')
    }else if(location.pathname === '/dividendCalendar'){
        setLocationText('Dividend Calendar ')
    }else if(location.pathname === '/clearing'){
        setLocationText('Клириг и Депозитарий ')
    }else{
        setLocationText('Страница не найдена')
    }
    
  }, [location])

  return (
    <HeaderSwiperWrap>
        <HeaderSwiperS>
            <Swiper
                loop
                autoplay={{
                    delay: 1000,
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
                    1200: {
                        slidesPerView: 5,
                    }
                }
                  }>


                {/* {showSwiper?prices.map((el, index) => {
                      return <SwiperSlide  key={index}>
                          <HeaderSwiperItem>
                                <Flex direction='column'>
                                    <HeaderSwiperText>{el}</HeaderSwiperText>
                                    <Flex margin='2px 0 0 0'>
                                        <HeaderSwiperText style={{textTransform: 'uppercase', margin: '0 10px 0 0'}}>{urlReqs[index][1]}</HeaderSwiperText>
                                        <HeaderSwiperText style={{textTransform: 'uppercase'}}>{urlReqs[index][0]}</HeaderSwiperText>
                                    </Flex>
                                </Flex>
                          </HeaderSwiperItem>
                      </SwiperSlide>
                  }):<></>} */}
    
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
                {pathLocation.map((el, index) => {
                    if(index === pathLocation.length -1){
                        return <HeaderSwiperPath key={index}>
                        <Link to='#'>{el}</Link>
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