import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex, Container } from "../../uikit/uikit";
import { bubble as Menu } from 'react-burger-menu'

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  
`

export const HeaderCont = styled(Container)`
  @media (max-width: 1200px) {
    margin: 0 auto 0 0;
  }
`

export const HeaderWrapper = styled(Flex)`
  width: 100%;
`

export const HeaderLogoWrap = styled.div`
  padding: 24px 33px 22px 0;
  border-right: 1px solid #DADADA;
  margin-right: auto;
`

export const HeaderLogoLink = styled(Link)`
`
export const HeaderLogo = styled.img`
  min-width: 40px;
  height: 100%;
  @media (max-width: 374px) {
    max-width: 182px;
  }
`

export const HeaderHomeIcon = styled.img`
  width: 20px;
`
export const HeaderHomeIconWrap = styled.div`
  margin-left: 34px;
  @media (max-width: 1200px) {
    display: none;
    margin: 0;
  }
`

export const HeaderMenu = styled(Menu)`
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HeaderMenuNav1 = styled(Flex)`
  @media (max-width: 1020px) {
    display: none;
  }
  @media (max-width: 1200px) {
    margin: 20px;
  }
`

export const HeaderMenuNav = styled(Flex)`
  @media (max-width: 1020px) {
    flex-direction: column;
    margin: 0;
  }
`

export const HeaderNavText = styled.p`
  font-family: Exo 2;
  font-style: normal;
  font-weight: 500;
  color: #045599;
  cursor: pointer;
`

export const HeaderNavLink = styled(Link)`
    font-family: Exo 2;
    font-style: normal;
    font-weight: 500;
    color: #045599;
    cursor: pointer;
    text-decoration: none;
    margin: 0 15px;
    @media (max-width: 1200px) {
        margin: 0 10px;
    }
    @media (max-width: 1020px) {
        color: #fff;
        margin: 15px 0;
    }
`

export const HeaderHomeLink = styled(Link)``

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
  @media (max-width: 1020px) {
    margin: 0;
  }
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
  @media (max-width: 1020px) {
    color: #fff;
    margin: 15px 0;
  }
`

export const HeaderlangLogo = styled.img`
  width: 20px;
  margin-right: 10px;
`

export const HeaderDropDownLogo = styled.img`
    width: 10px;
    margin: 0 0 0 10px;
`

export const HeaderDropDownS = styled.div`
    width: 100%;
    height: 35px;
    background: #045599;
    clip-path: polygon(50% 63%,45% 100%,55% 100%);
`
export const HeaderDropDownWrap = styled.div`
color: #fff;
position: absolute;
top: 100%;
left: -13.5rem;
z-index: 2;
`

export const HeaderDropDown = styled.div`
background: #045599;
    padding: 10px;
`

export const HeaderChangeLang = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #045599;
  height: 20px;
  margin-bottom: 10px;
  border-style: none;
  background: transparent;
  &:last-child{
    margin-bottom: 0;
  }
`
