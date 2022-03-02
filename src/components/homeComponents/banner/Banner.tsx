import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flex } from "../../../uikit/uikit";
import BannerInfo from "../bannerInfo/BannerInfo";
import HeaderSwiper from "../headerSwiper/HeaderSwiper";
import { BannerBtn, BannerFlex, BannerInfoTexts, BannerText, BannerWrap } from "./BannerSC";


const Banner:React.FC = () => {
    const navigate = useNavigate()

    return (
        <BannerWrap>
            <HeaderSwiper/>

            <Container>
                <BannerFlex align="center" justify="space-around" margin='50px 0 0 0'>
                    <BannerInfoTexts align="flex-start" direction="column">
                        <BannerText>Инвестиции в рынок ценных бумаг</BannerText>
                        <BannerBtn onClick={() => navigate('/markets')}>Подробнее</BannerBtn>
                    </BannerInfoTexts>

                    <BannerInfo/>
                </BannerFlex>
            </Container>
        </BannerWrap>
    )
}

export default Banner