import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from '../../../uikit/uikit'
import { DropDownInside, DropDownLink, HeaderDropDown, HeaderDropDownS, HeaderDropDownWrap, HeaderNavText } from '../hedearStyledComponents'

const DropDownListing:React.FC = () => {
  const [listingList, setListingList] = React.useState([
    'Листинг',
    'Облигации',
    'Раскрытие информации компаниями'
  ])
  const navigate = useNavigate()

  return (
    <HeaderDropDownWrap>
      <DropDownInside style={{  height: '160px'}}>
        <Flex direction='column'>
          {listingList.map((el, index) => {
            return <DropDownLink
                      key={index} 
                      onClick={() => navigate('listing', {state: el})}>
                    {el}
                  </DropDownLink>
          })}
        </Flex>
      </DropDownInside>
    </HeaderDropDownWrap>
  )
}

export default DropDownListing