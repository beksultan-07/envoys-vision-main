import React from "react";
import { Container, Flex } from "../../../uikit/uikit";
import BannerInfo from "../bannerInfo/BannerInfo";
import HeaderSwiper from "../headerSwiper/HeaderSwiper";
import { BannerBtn, BannerFlex, BannerInfoTexts, BannerText, BannerWrap } from "./BannerSC";

const Banner:React.FC = () => {
    return (
        <BannerWrap>
            <HeaderSwiper/>

            <Container>
                <BannerFlex align="center" justify="space-around" margin='50px 0 0 0'>
                    <BannerInfoTexts align="flex-start" direction="column">
                        <BannerText>Weekly Preview: Earnings To Watch this Week (AAPL, AMD, INTC, MSFT, TSLA)</BannerText>
                        <BannerBtn>Призыв к действию</BannerBtn>
                    </BannerInfoTexts>

                    <BannerInfo/>
                </BannerFlex>
            </Container>
        </BannerWrap>
    )
}

export default Banner