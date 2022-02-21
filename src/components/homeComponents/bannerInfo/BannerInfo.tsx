import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { BannerDate, BannerInfoIncrease, BannerInfoLink, BannerInfoS, BannerInfoText, BannerInfoWrap, BannerSearch, BannerSearchBtn, BannerSearchBtnIcon } from './bannerInfoSC'
import Icon from '../../../assets/search.svg';

const BannerInfo:React.FC = () => {
    const [inputValue, setInputValue] = React.useState('')

  return (
    <BannerInfoS>
        <BannerInfoWrap>
            <Flex align='center'>
                <BannerSearch placeholder='Введите название' onChange={(e) => setInputValue(e.target.value)}/>
                <BannerSearchBtn><BannerSearchBtnIcon src={Icon}/></BannerSearchBtn>
            </Flex>

            <BannerDate>22 Января 2022</BannerDate>

            <BannerInfoText margin={false}>NASDAQ Composite Index</BannerInfoText>
            <Flex>
                <BannerInfoText margin={false}>13 768.92 </BannerInfoText>
                <BannerInfoIncrease margin={true}>+385.10</BannerInfoIncrease> 
                <BannerInfoIncrease  margin={true}>+2.72%</BannerInfoIncrease> 
            </Flex>
            <Flex>
                <BannerInfoText margin={false}>Volume:</BannerInfoText>
                <BannerInfoText margin={true}>5,746,186,301</BannerInfoText>
            </Flex>

            <Flex justify='space-between'>
                <Flex direction='column' >
                    <BannerInfoText margin={false}>NASDAQ-100</BannerInfoText>
                    <BannerInfoText margin={false}>14438.4</BannerInfoText>
                    <Flex>
                        <BannerInfoIncrease  margin={false}>+408.06</BannerInfoIncrease> 
                        <BannerInfoIncrease  margin={true}>+2.75%</BannerInfoIncrease> 
                    </Flex>
                </Flex>
    
                <Flex direction='column' >
                    <BannerInfoText margin={false}>Dow Industrials</BannerInfoText>
                    <BannerInfoText margin={false}>34265.27</BannerInfoText>
                    <Flex>
                        <BannerInfoIncrease  margin={false}>+450.02</BannerInfoIncrease> 
                        <BannerInfoIncrease  margin={true}>+1.3%</BannerInfoIncrease> 
                    </Flex>
                </Flex>
            </Flex>

            <BannerInfoLink to='/'>Посмотреть всю рыночную активность</BannerInfoLink>
        </BannerInfoWrap>
    </BannerInfoS>
  )
}

export default BannerInfo