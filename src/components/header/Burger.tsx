import React from "react";

import Dd from '../../assets/vectorDown.svg';
import User from '../../assets/userIcon.svg';
import Lang from '../../assets/ru.svg';

import {HeaderMenu, HeaderMenuNav, HeaderNavLink, HeaderSignIn, HeaderSignInLogo, HeaderlangLogo, HeaderLangText, HeaderDropDownLogo, HeaderChangeLang, LangWrap } from './hedearStyledComponents'
import { Flex } from "../../uikit/uikit";
import {changeLang} from "../../Translater/i18next";


type Props = {
    pageWrapId?: string;
    outerContainerId?: string;
}

const Burger:React.FC<Props> = (props) => {

    const [navLinks, setNavLinks] = React.useState(['Рынки', 'Листинг', 'Клиринг', 'Новости и аналитика', 'О нас'])
    const [navLinksEn, setNavLinksEn] = React.useState(['markets', 'listing', 'clearing', 'news&analytics', 'aboutus'])
    const [listingClick, setListingClick] = React.useState(false)
    const [activeLang, setActiveLang] = React.useState('Russian')
    const [showLangCh, setShowLangCh] = React.useState(false)

  return (
    <HeaderMenu right>
                
        <Flex direction="column" align="center">
            <HeaderMenuNav align='center' margin='0 50px' justify='space-between' flex={1}>
                {navLinks.map((el, index) => {
                    return <HeaderNavLink key={index} to={navLinksEn[index]}> {activeLang=='Russian'?el:navLinksEn[index].replace('&', ' ')} </HeaderNavLink>
                })}
            </HeaderMenuNav>

    
            <Flex direction='column' align='center' style={{position: 'relative'}}>
                    <Flex align="center" >
                        <HeaderChangeLang onClick={() => setShowLangCh(val => !val)} style={{fontSize: '18px', color: '#fff'}}>
                            {activeLang}
                            <HeaderlangLogo src={Dd} style={{transform: showLangCh?'rotate(180deg)':'rotate(0deg)', transition: '.2s'}}/>
                        </HeaderChangeLang>
                    </Flex>

                    {showLangCh?
                        <LangWrap direction='column' align='center' style={{top: '150%'}}>
                            <HeaderChangeLang style={{fontSize: '18px'}} onClick={() => {
                                changeLang("en")
                                setActiveLang('English')
                            } }>English</HeaderChangeLang>
                            <HeaderChangeLang style={{fontSize: '18px', margin: '10px 0'}} onClick={() => {
                                changeLang("ru")
                                setActiveLang('Russian')
                            }}>Russian</HeaderChangeLang>
                        </LangWrap>
                    :<></>    
            }

            </Flex>   
            
        </Flex>
    </HeaderMenu>
  );
};

export default Burger