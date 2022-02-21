import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
`

export const HeaderLogoWrap = styled.div`
    padding: 24px 33px 22px 0;
    border-right: 1px solid #DADADA;
`

export const HeaderLogo = styled.img`
    min-width: 40px;
`

export const HeaderHomeIcon = styled.img`
    width: 20px;
    `
export const HeaderHomeIconWrap = styled.div`
    margin-left: 34px;
`

export const HeaderNavLink = styled(Link)`
    font-family: Exo 2;
    font-style: normal;
    font-weight: 500;
    color: #045599;
    cursor: pointer;
    text-decoration: none;
    /* margin: 0 15px; */
`

export const HeaderHomeLink = styled(Link)``

export const HeaderControls = styled.div`
    margin: 0 0 0 34px;
`

export const HeaderSignIn = styled.button`
    color: #fff;
    background: #4478BB;
    cursor: pointer;
    border: none;
    border-radius: 7px;
    padding: 6px;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
`

export const HeaderSignInLogo = styled.img`
    width: 16px;
    padding-right: 5px;
`

export const HeaderLangText = styled.p`

    cursor: pointer;
    font-family: Exo 2;
    font-style: normal;
    font-weight: 500;
    color: #045599;
`

export const HeaderlangLogo = styled.img`
    width: 20px;
    margin-right: 10px;
`

export const HeaderDropDownLogo = styled.img`
    width: 10px;
    margin: 0 0 0 10px;
`