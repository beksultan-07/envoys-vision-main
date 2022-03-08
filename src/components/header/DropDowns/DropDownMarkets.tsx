import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavLink, HeaderNavText } from '../hedearStyledComponents'

const DropDownMarkets:React.FC = () => {
    const [headerLinks, setHeaderLink] = React.useState([
        {title: 'Фондовый рынок', value: ['Российский рынок', 'Америаканский рынок', 'Кыргызский рынок']},
        {title: 'Сектора', value: ['Горднодобывающий сектор','Промышленность','Финансовый сектор','Сельское хозяйство']},
        {title: 'Другое', value: ['Рынки деривативов','Валютный рынок','Криптовалютный рынок','Товарный сектор','Рынок недвижимости']},
    ])
    return (
        <HeaderDropDownWrap>
            <HeaderDropDownS></HeaderDropDownS>
            <HeaderDropDown>
                <Flex>
                    {headerLinks.map((el, index) => {
                        return <Flex
                            key={index}
                            direction='column'
                            flex={1} align='flex-start'
                            margin='0 10px'>
                            <HeaderNavText
                                style={{color: '#fff',
                                    margin: '0 0 20px 0',
                                    fontSize: '20px'}}>
                                {el.title}
                            </HeaderNavText>
                        </Flex>
                    })}
                </Flex>
                <Flex>
                    {headerLinks.map((el, i) => {
                        return <Flex key={i} direction='column' flex={1} margin='0 10px'>
                            {el.value.map((name, i) => {
                                return <HeaderNavLink to='/market' style={{color: '#fff', margin: '10px 0'}} key={i}>{name}</HeaderNavLink>
                            })}

                        </Flex>
                    })}
                </Flex>
            </HeaderDropDown>
        </HeaderDropDownWrap>
    )
}

export default DropDownMarkets