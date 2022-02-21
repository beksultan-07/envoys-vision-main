import React, { useState } from 'react'

import Logo  from "../../assets/logo.svg"
import Home from '../../assets/Home.svg'
import Dd from '../../assets/vectorDown.svg'
import User from '../../assets/userIcon.svg'
import Lang from '../../assets/ru.svg'

import { Container, Flex } from '../../uikit/uikit'
import { HeaderControls, HeaderDropDownLogo, HeaderHomeIcon, HeaderHomeIconWrap, HeaderHomeLink, HeaderlangLogo, HeaderLangText, HeaderLogo, HeaderLogoWrap, HeaderNavLink, HeaderSignIn, HeaderSignInLogo, HeaderStyle } from './hedearStyledComponents'




const Header:React.FC = () => {
    const [navLinks, setNavLinks] = useState(['Решения', 'Рынки', 'Листинг', 'Клиринг', 'Новости и аналитика', 'О нас'])
    const [navLinksEn, setNavLinksEn] = useState(['Solutions', 'Markets', 'Listing', 'Clearing', 'News&Analytics', 'AboutUs'])


  return (
    <HeaderStyle>
        <Container>
            <Flex align='center'>
                <HeaderLogoWrap>
                    <HeaderLogo src={Logo}/>
                </HeaderLogoWrap>

                <HeaderHomeIconWrap>
                    <HeaderHomeLink to='/'><HeaderHomeIcon src={Home}/></HeaderHomeLink>
                </HeaderHomeIconWrap>

                <Flex align='center' margin='0 50px' justify='space-between' flex={1}>
                    {navLinks.map((el, index) => {
                        if(el === 'Клиринг' || el === 'Новости и аналитика' || el === 'О нас'){
                            return <HeaderNavLink to={navLinksEn[index]}> {el} </HeaderNavLink>
                        }
                        return <HeaderNavLink to={navLinksEn[index]}>
                        <Flex align='center'>
                            {el}
                            <HeaderDropDownLogo src={Dd}/>
                        </Flex>
                    </HeaderNavLink>
                    })}
                </Flex>

                {/* <HeaderControls> */}
                    <Flex direction='column' align='center' margin='0 0 0 auto'>
                        <HeaderSignIn>
                            <Flex align='center'>
                                <HeaderSignInLogo src={User}/>
                                Войти / Регистрация
                            </Flex>
                        </HeaderSignIn>

                        <Flex margin='5px 0 0 0'>
                            <HeaderlangLogo src={Lang}/>
                            <HeaderLangText>
                                Русский
                            </HeaderLangText>
                            <HeaderDropDownLogo src={Dd}/>
                        </Flex>
                    </Flex>

                {/* </HeaderControls> */}
            </Flex>
        </Container>
    </HeaderStyle>
  )
}

export default Header