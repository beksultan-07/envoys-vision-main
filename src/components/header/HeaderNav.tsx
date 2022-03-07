import React, { useState } from "react";

import Dd from '../../assets/vectorDown.svg';
import User from '../../assets/userIcon.svg';
import Lang from '../../assets/ru.svg';
import usa from '../../assets/header/united-states.png';

import {HeaderNavLink, HeaderSignIn, HeaderSignInLogo, HeaderlangLogo, HeaderLangText, HeaderDropDownLogo, HeaderMenuNav1, HeaderNavText, HeaderChangeLang} from './hedearStyledComponents'
import { Flex } from "../../uikit/uikit";
import DropDownMarkets from "./DropDowns/DropDownMarkets";
import DropDownListing from "./DropDowns/DropDownMarkets";
import {changeLang} from "../../Translater/i18next";

const HeaderNav:React.FC = () => {

    const [navLinks, setNavLinks] = React.useState(['Рынки', 'Листинг', 'Клиринг', 'Новости и аналитика', 'О нас'])
    const [navLinksEn, setNavLinksEn] = React.useState(['markets', 'listing', 'clearing', 'news&analytics', 'aboutus'])
    const [marketClick, setMarketClick] = useState(false)
    const [listingClick, setListingClick] = useState(false)


    return (
        <HeaderMenuNav1 align="center" flex={1} justify='space-between' margin='0 50px'>
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
                            <HeaderNavText>{el}</HeaderNavText>
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
                            <HeaderNavText>{el}</HeaderNavText>
                            {listingClick?<DropDownListing/>:<></>}
                            <HeaderDropDownLogo src={Dd}/>
                        </Flex>
                    }
                    return <HeaderNavLink key={index} to={navLinksEn[index]}> {el} </HeaderNavLink>
                })}
            </Flex>

            <Flex direction='column' align='center' margin='0 0 0 auto'>

                <Flex margin='5px 0 0 0' direction={'column'}>
                        <HeaderChangeLang onClick={() => changeLang("en") }>English</HeaderChangeLang>
                        <HeaderChangeLang onClick={() => changeLang("ru")}>Russian</HeaderChangeLang>
                </Flex>
            </Flex>

        </HeaderMenuNav1>
    );
};

export default HeaderNav