import React from "react";
import { Container, Flex } from "../../../uikit/uikit";
import BannerInfo from "../bannerInfo/BannerInfo";
import { BannerBtn, BannerFlex, BannerText, BannerWrap } from "./BannerSC";

const Banner:React.FC = () => {
    return (
        <BannerWrap>
            <Container>
                <BannerFlex align="center" justify="space-around">
                    <Flex align="flex-start" direction="column">
                        <BannerText>Weekly Preview: Earnings To Watch this Week (AAPL, AMD, INTC, MSFT, TSLA)</BannerText>
                        <BannerBtn>Призыв к действию</BannerBtn>
                    </Flex>

                    <BannerInfo/>
                </BannerFlex>
            </Container>
        </BannerWrap>
    )
}

export default Banner