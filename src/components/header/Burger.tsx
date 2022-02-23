import React from "react";

import Dd from '../../assets/vectorDown.svg';
import User from '../../assets/userIcon.svg';
import Lang from '../../assets/ru.svg';

import {HeaderMenu, HeaderMenuNav, HeaderNavLink, HeaderSignIn, HeaderSignInLogo, HeaderlangLogo, HeaderLangText, HeaderDropDownLogo } from './hedearStyledComponents'
import { Flex } from "../../uikit/uikit";

type Props = {
    pageWrapId?: string;
    outerContainerId?: string;
}

const Burger:React.FC<Props> = (props) => {

    const [navLinks, setNavLinks] = React.useState(['Решения', 'Рынки', 'Листинг', 'Клиринг', 'Новости и аналитика', 'О нас'])
    const [navLinksEn, setNavLinksEn] = React.useState(['Solutions', 'Markets', 'Listing', 'Clearing', 'News&Analytics', 'AboutUs'])

  return (
    <HeaderMenu right>
                
        <Flex direction="column" align="center">
            <HeaderMenuNav align='center' margin='0 50px' justify='space-between' flex={1}>
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
            </HeaderMenuNav>

            <Flex margin='5px 0 0 0'>
                <HeaderlangLogo src={Lang}/>
                <HeaderLangText>
                    Русский
                </HeaderLangText>
                <HeaderDropDownLogo src={Dd}/>
            </Flex>
    
            <HeaderSignIn>
                <Flex align='center'>
                    <HeaderSignInLogo src={User}/>
                    Войти / Регистрация
                </Flex>
            </HeaderSignIn>    
            
        </Flex>
    </HeaderMenu>
  );
};

export default Burger