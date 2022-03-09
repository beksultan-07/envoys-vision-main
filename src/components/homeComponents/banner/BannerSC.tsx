import styled from "styled-components";
import { Flex } from "../../../uikit/uikit";

import bg from '../../../assets/backGround.jpg';

export const BannerWrap = styled.div`
    height: 100%;
    background: url(${bg}) 0 0 / cover;
    padding-bottom: 40px;
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
    padding: 15px 60px;
    font-family: Exo 2;
    font-style: normal;
    border-radius: 2px;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
    transition: .3s;
    :hover{
        background: #c5671b;
        /* transform: scale(1.04); */
    }
` 

export const BannerInfoTexts = styled(Flex)`
    @media (max-width: 960px) {
        margin-bottom: 30px;
    }
`

export const BannerFlex = styled(Flex)`
    height: 100%;
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: flex-start;
        margin-left: 10%;
    }
    @media (max-width: 500px) {
        margin: 50px 0 0 0;
        align-items: center;
    }
`