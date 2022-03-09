import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../../../uikit/uikit";

export const BannerInfoS = styled.div`
    background: #fff;
    border-radius: 10px;
    max-width: 370px;
    /* height: 527px; */
    `

export const BannerInfoWrap = styled.div`
    padding: 25px;
`

export const BannerSearch = styled.input`
    background: #F1F1F1;
    width: 100%;
    padding: 21px 24px;
    outline: none;
    border: none;
    border-radius: 10px 0 0 10px;
    ::placeholder {
        font-family: Exo 2;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        color: #C0C0C0;
   }
`

export const BannerSearchBtn = styled.button`
    padding: 20px;
    outline: none;
    border: none;
    background: #F1F1F1;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
`

export const BannerSearchBtnIcon = styled.img`
    width: 16px;
`

export const BannerDate = styled.p`
    margin: 20px 0;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #C0C0C0;
` 
type Props ={
    margin: boolean;
    mnTop?: boolean;
}

export const BannerInfoText = styled.p<Props>`
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #101010;
    margin-left: ${(props) => props.margin?'10px':'0'};
    margin-top: ${(props) => props.mnTop?'15px':'0'};
`

export const BannerInfoIncrease = styled(BannerInfoText)<Props>`
    color: #4CFFD7;
    margin-top: 0;
    margin-left: ${(props) => props.margin?'10px':'0'};
`

export const BannerInfoDecrease = styled(BannerInfoText)<Props>`
    color: #ff4c4c;
    margin-top: 0;
    margin-left: ${(props) => props.margin?'10px':'0'};
`

export const BannerInfoLink = styled(Link)`
    text-decoration: none;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #045599;
`