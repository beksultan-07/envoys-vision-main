import React, { useState } from 'react'

import Logo  from "../../assets/logo.svg";
import Home from '../../assets/Home.svg';

import { Container, Flex } from '../../uikit/uikit'
import { HeaderCont, HeaderHomeIcon, HeaderHomeIconWrap, HeaderHomeLink,  HeaderLogo, HeaderLogoWrap,   HeaderStyle, HeaderWrapper, HeaderLogoLink } from './hedearStyledComponents'




import { slide as Menu } from 'react-burger-menu'
import SideBar from './SideBar';
import HeaderNav from './HeaderNav';



const Header:React.FC = () => {
  return (
    <HeaderStyle>
        <HeaderCont>
            <HeaderWrapper align='center'>
                <HeaderLogoWrap>
                    <HeaderLogoLink to='/'>
                        <HeaderLogo src={Logo}/>
                    </HeaderLogoLink>
                </HeaderLogoWrap>

                <HeaderHomeIconWrap>
                    <HeaderHomeLink to='/'>
                        <HeaderHomeIcon src={Home}/>
                    </HeaderHomeLink>
                </HeaderHomeIconWrap>

                <SideBar/>
                <HeaderNav/>
                

            </HeaderWrapper>
        </HeaderCont>
    </HeaderStyle>
  )
}

export default Header