import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavLink } from '../hedearStyledComponents'

const DropDownListing = () => {
    const [listingLinks, setListingLinks] = React.useState([
        'Список компаний',
        'ESG облигации',
        'Раскрытие информации компаниями',
        'Дипломанты номинаций'
    ])

    return (
        <HeaderDropDownWrap style={{left: '-2.5rem'}}>
            <HeaderDropDownS></HeaderDropDownS>
                <HeaderDropDown>
                    <Flex direction='column' flex={1} margin='0 10px'>
                        {listingLinks.map((name, i) => {
                            return <HeaderNavLink to='/listing' style={{color: '#fff', margin: '10px 0'}} key={i}>{name}</HeaderNavLink>
                        })}
                    </Flex>
                </HeaderDropDown>
        </HeaderDropDownWrap>
    )
}

export default DropDownListing