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


const HeaderSwiper:React.FC = () => {

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
        }
    ])

    function getDateNow(){
        let dateNow = new Date().toLocaleString("en-US", {timeZone: 'Asia/Almaty'})
        let dates:string[] = []
        let dateName: string = ''
        for(let i = 0; i < dateNow.length; i++){
          dateName += dateNow[i]
          if(i !== 0 && dateNow[i] === '/' || i === dateNow.length-1){
                dates.push(dateName)
                dateName = ''
          }
        }
        let newDates = []
        dates.forEach((el, index) => {
            if(el[0] === '/'){
                el = el.slice(1)
            }
            if(el[el.length-1] === '/'){
              el = el.slice(0, el.length-1)
            }
            if(index === 2){
                el = el.slice(0, 4)
            }
            newDates.push(el)
          })
        return newDates
    }
    
    React.useEffect(() => {
        const pricesArr:string[] = []
        let nowDate = getDateNow()

        urlReqs.forEach((el, index) => {
            axios(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${el[0]}&to_currency=${el[1]}&apikey=B60Y9G6MUFIB74BR`)
                .then(res => res.data)
                .then(res => {
                    for(let i in res){
                        for(let j in res[i]){
                            if(j === '5. Exchange Rate'){
                                pricesArr.push(res[i][j])
                            }
                        }
                    }
                    console.log(pricesArr.length);
                    if(pricesArr.length >= urlReqs.length){
                        setPrices(pricesArr)
                        setShowSwiper(true)
                    }
                })
        })
    }, [])
    

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
                1200: {
                    slidesPerView: 6,
                }}
              }>
                  {showSwiper?prices.map((el, index) => {
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
                  }):<></>}

            {/* {values.map((val, index) => {
                let posB = false
                if(val.pos[0] === '+') posB = true
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
            })} */}
        </Swiper>
    </HeaderSwiperS>
  )
}

export default HeaderSwiper