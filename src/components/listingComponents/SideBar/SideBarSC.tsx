import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../../../uikit/uikit";

type Props = {
    click: boolean;
}

export const SideBarIcon = styled.img`
    visibility: hidden;
    width: 0;
    @media (max-width: 765px) {
        visibility: visible;
        width: 20px;
        margin: 9px 0 0 0;
        cursor: pointer;

    }
`


export const SideBarWrap = styled.div`
    padding: 0px 40px 0 0;
    @media (max-width: 765px) {
        padding: 0px 10px 0 0;
        
    }
    `

export const SideBarCloseWrap = styled.div<Props>`
    @media (max-width: 765px) {
        transition: .3s linear;
        position: absolute;
        top: 0;
        opacity: ${props => props.click?'1':'0'};
        z-index: ${props => props.click?'1':'-100'};
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3)};
    }
`

export const SideBarFlex = styled(Flex)<Props>`
    @media (max-width: 765px) {
        position: absolute;
        padding: 20px 10px;
        top: 0;
        transition: .4s;
        left: ${props => props.click?'0':'-120%'};
        background: #373a47;
        height: 100%;
        z-index: 2;
        width: 190px;
    }
`

export const SideBarTitle = styled.h3`
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #101010;
    margin: 0 0 36px 0;
    @media (max-width: 765px) {
            color: #fff;
            width: 100%
    }
`

export const SideBarBtn = styled.button`
    visibility: hidden;
    color: #fff;
    background: none;
    padding: 0;
    border: none;

    img{
        width: 15px;
        cursor: pointer;
    }
    @media (max-width: 765px) {
        visibility: visible;
    }
`

export const SideBarLink = styled.button`
    background: none;
    border: none;
    padding: 0;
    text-decoration: none;
    font-family: Exo 2;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #101010;
    cursor: pointer;
    text-align: start;
    margin: 20px 0;
    @media (max-width: 765px) {
        margin: 10px 0;
        color: #fff;
    }
`

export const SideBarLinkActive = styled(SideBarLink)`
    color: #045599;
    @media (max-width: 765px) {
        color: #fff;
    }
`