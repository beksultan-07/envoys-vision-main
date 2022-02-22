import React from "react";

import Dd from '../../assets/vectorDown.svg';
import User from '../../assets/userIcon.svg';
import Lang from '../../assets/ru.svg';

import {HeaderNavLink, HeaderSignIn, HeaderSignInLogo, HeaderlangLogo, HeaderLangText, HeaderDropDownLogo, HeaderMenuNav1} from './hedearStyledComponents'
import { Flex } from "../../uikit/uikit";

const HeaderNav:React.FC = () => {

    const [navLinks, setNavLinks] = React.useState(['Решения', 'Рынки', 'Листинг', 'Клиринг', 'Новости и аналитика', 'О нас'])
    const [navLinksEn, setNavLinksEn] = React.useState(['Solutions', 'Markets', 'Listing', 'Clearing', 'News&Analytics', 'AboutUs'])



  return (
    <HeaderMenuNav1 align="center" flex={1} justify='space-between' margin='0 50px'>
         <Flex align='center' justify='space-between' flex={1}>
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

    </HeaderMenuNav1>
  );
};

export default HeaderNav