import styled from "styled-components";
import { Flex } from "../../../uikit/uikit";

import bg from '../../../assets/backGround.jpg';

export const BannerWrap = styled.div`
    height: 100vh;
    background: url(${bg}) 0 0 / cover;
` 

export const BannerText = styled.h2`
    max-width: 570px;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 40px;
`

export const BannerBtn = styled.button`
    color: #fff;
    background: #F47F1F;
    border: none;
    padding: 21px 43px;
    font-family: Exo 2;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
` 

export const BannerFlex = styled(Flex)`
    height: 100%;
`