import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import { DropDownInside, DropDownLink, HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavLink, HeaderNavText } from '../hedearStyledComponents'

const DropDownMarkets:React.FC = () => {
    const [headerLinks, setHeaderLink] = React.useState([
        {title: 'Фондовый рынок', value: ['Российский рынок', 'Америаканский рынок', 'Кыргызский рынок']},
        {title: 'Сектора', value: ['Горднодобывающий сектор','Промышленность','Финансовый сектор','Сельское хозяйство']},
        {title: 'Другое', value: ['Рынки деривативов','Валютный рынок','Криптовалютный рынок','Товарный сектор','Рынок недвижимости']},
    ])

    const navigate = useNavigate()

    return (
        <HeaderDropDownWrap>
            <DropDownInside style={{width: '570px', height: '320px'}}>
                <Flex>
                    {headerLinks.map((el, index) => {
                        return <Flex
                            key={index}
                            direction='column'
                            flex={1} align='flex-start'
                            margin='0 10px'>
                            <HeaderNavText
                                style={{color: '#045599',
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
                                return <DropDownLink onClick={() => navigate('market')}
                                key={i}>{name}</DropDownLink>
                            })}

                        </Flex>
                    })}
                </Flex>
            </DropDownInside>
        </HeaderDropDownWrap>
    )
}

export default DropDownMarkets