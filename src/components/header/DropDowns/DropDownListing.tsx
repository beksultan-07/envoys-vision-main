import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import { HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavText } from '../hedearStyledComponents'

const DropDownListing:React.FC = () => {
  const [listingList, setListingList] = React.useState([
    'Список компаний',
    'ESG облигации',
    'Раскрытие информации компаниями',
    'Дипломанты номинаций'
  ])
  const navigate = useNavigate()

  return (
    <HeaderDropDownWrap>
      <HeaderDropDownS></HeaderDropDownS>
      <HeaderDropDown style={{left: '-1.5rem'}}>
        <Flex direction='column'>
          {listingList.map((el, index) => {
            return <HeaderNavText
                      key={index} 
                      style={{color: '#fff', margin: '10px 0'}}
                      onClick={() => navigate('listing', {state: el})}>
                    {el}
                  </HeaderNavText>
          })}
        </Flex>
      </HeaderDropDown>
    </HeaderDropDownWrap>
  )
}

export default DropDownListing