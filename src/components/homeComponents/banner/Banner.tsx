import React from "react";
import { Container, Flex } from "../../../uikit/uikit";
import BannerInfo from "../bannerInfo/BannerInfo";
import HeaderSwiper from "../headerSwiper/HeaderSwiper";
import { BannerBtn, BannerFlex, BannerInfoTexts, BannerText, BannerWrap } from "./BannerSC";
import {useTranslation} from "react-i18next";

const Banner:React.FC = () => {
    const {t} = useTranslation()
    return (
        <BannerWrap>

            <HeaderSwiper/>

            <Container>
                <BannerFlex align="center" justify="space-around" margin='50px 0 0 0'>
                    <BannerInfoTexts align="flex-start" direction="column">
                        <BannerText>{t("home.homeTitle")}dgfd</BannerText>
                        <BannerBtn>{t("home.button")}dsfdsfsfdf</BannerBtn>
                    </BannerInfoTexts>

                    <BannerInfo/>
                </BannerFlex>
            </Container>
        </BannerWrap>
    )
}

export default Banner