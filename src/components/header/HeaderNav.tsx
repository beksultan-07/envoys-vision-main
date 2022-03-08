import React, { useState } from "react";

import Dd from '../../assets/vectorDown.svg';
import User from '../../assets/userIcon.svg';
import Lang from '../../assets/ru.svg';
import usa from '../../assets/header/united-states.png';

import {HeaderNavLink, HeaderSignIn, HeaderSignInLogo, HeaderlangLogo, HeaderLangText, HeaderDropDownLogo, HeaderMenuNav1, HeaderNavText, HeaderChangeLang, LangWrap} from './hedearStyledComponents'
import { Flex } from "../../uikit/uikit";
import DropDownMarkets from "./DropDowns/DropDownMarkets";
import DropDownListing from "./DropDowns/DropDownListing";
import {changeLang} from "../../Translater/i18next";
import DropDownNews from "./DropDowns/DropDownNews";

const HeaderNav:React.FC = () => {

    const [navLinks, setNavLinks] = React.useState(['Рынки', 'Листинг', 'Клиринг', 'Новости и аналитика', 'О нас'])
    const [navLinksEn, setNavLinksEn] = React.useState(['markets', 'listing', 'clearing', 'news&analytics', 'aboutus'])
    const [marketClick, setMarketClick] = useState(false)
    const [listingClick, setListingClick] = useState(false)
    const [newsClick, setNewsClick] = useState(false)

    const [activeLang, setActiveLang] = useState('Russian')
    const [showLangCh, setShowLangCh] = useState(false)


    return (
        <HeaderMenuNav1 align="center" flex={1} justify='space-between' margin='0 0 0 20px'>
            <Flex align='center' justify='space-between' flex={1}>
                {navLinks.map((el, index) => {
                    if(el === 'Рынки'){
                        return <Flex
                            key={index}
                            margin='0 15px'
                            align='center'
                            style={{position: 'relative'}}
                            onMouseEnter={() => setMarketClick(true)}
                            onMouseLeave={() => setMarketClick(false)}
                        >
                            <HeaderNavText>{activeLang=='Russian'?el:navLinksEn[index]}</HeaderNavText>
                            {marketClick?<DropDownMarkets/>:<></>}
                            <HeaderDropDownLogo src={Dd}/>
                        </Flex>
                    }

                    if(el === 'Листинг'){
                        return <Flex
                            margin='0 15px'
                            key={index}
                            align='center'
                            style={{position: 'relative'}}
                            onMouseEnter={() => setListingClick(true)}
                            onMouseLeave={() => setListingClick(false)}
                        >
                            <HeaderNavText>{activeLang=='Russian'?el:navLinksEn[index]}</HeaderNavText>
                            {listingClick?<DropDownListing/>:<></>}
                            <HeaderDropDownLogo src={Dd}/>
                        </Flex>
                    }

                    if(el === 'Новости и аналитика'){
                        return <Flex
                            margin='0 15px'
                            key={index}
                            align='center'
                            style={{position: 'relative'}}
                            onMouseEnter={() => setNewsClick(true)}
                            onMouseLeave={() => setNewsClick(false)}
                        >
                            <HeaderNavText>{activeLang=='Russian'?el:navLinksEn[index]}</HeaderNavText>
                            {newsClick?<DropDownNews/>:<></>}
                            <HeaderDropDownLogo src={Dd}/>
                        </Flex>
                    }

                    return <HeaderNavLink key={index} to={navLinksEn[index]}> {activeLang=='Russian'?el:navLinksEn[index].replace('&',' ')} </HeaderNavLink>
                })}
            </Flex>

            <Flex direction='column' align='center' margin='0 0 0 100px' style={{position: 'relative'}}>
                    <Flex align="center">
                        <HeaderChangeLang onClick={() => setShowLangCh(val => !val)}>
                            {activeLang}
                            <HeaderlangLogo src={Dd} style={{transform: showLangCh?'rotate(180deg)':'rotate(0deg)', transition: '.2s'}}/>
                        </HeaderChangeLang>
                    </Flex>

                    {showLangCh?
                        <LangWrap direction='column' align='center'>
                            <HeaderChangeLang onClick={() => {
                                changeLang("en")
                                setActiveLang('English')
                            } }>English</HeaderChangeLang>
                            <HeaderChangeLang style={{margin: '10px 0'}} onClick={() => {
                                changeLang("ru")
                                setActiveLang('Russian')
                            }}>Russian</HeaderChangeLang>
                        </LangWrap>
                    :<></>    
            }

            </Flex>

        </HeaderMenuNav1>
    );
};

export default HeaderNav