import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavLink, HeaderNavText } from '../hedearStyledComponents'

const DropDownNews:React.FC = () => {
    const [links, setLinks] = React.useState([
        'Новости',
        'Календарь Диведент',
        'Календарь заработка'
    ])
    const [linksEn, setLinksEn] = React.useState([
        'News',
        'Dividend Calendar',
        'Earning Calendar'
    ])

    return <HeaderDropDownWrap style={{left: '-0.5rem'}}>
            <HeaderDropDownS></HeaderDropDownS>
    
            <HeaderDropDown>
                <Flex direction='column'>
                    {links.map((el, index) => {
                        return <HeaderNavLink
                            to={
                                linksEn[index]==='News'?'news&analytics':linksEn[index].toLowerCase().replace(' ', '')
                            }
                            key={index}
                            style={{color: '#fff',
                            margin: '0 0 20px 0'}}>
                        {el}
                    </HeaderNavLink>
                    })}
                </Flex>
            </HeaderDropDown>
    </HeaderDropDownWrap>
}

export default DropDownNews