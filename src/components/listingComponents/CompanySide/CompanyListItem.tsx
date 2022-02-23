import React, { useState } from 'react'
import { Flex } from '../../../uikit/uikit';
import { CompanyListItemDD, CompanyListItemDDBottom, CompanyListItemIcon, CompanyListItemIconWrap, CompanyListItemS, CompanyListItemText, CompanyListItemDDTop, CompanyListItemDDBottomText, CompanyDDWrap } from './CompanySC';
import DDDown from '../../../assets/DDDown.svg'
import DDUp from '../../../assets/DDUp.svg' 

type Props = {
  name: string;
}

const CompanyListItem:React.FC<Props> = ({name}) => {
  const [DDClick, setDDClick] = useState(false)
  const [companyListInfo, setCompanyListInfo] = useState([
    'Торговый код',
    'ISIN',
    'Площадка',
    'Сектор',
    'Категория',
    'Торги',
    'Индекс'
  ])
  const [companyListInfoVal, setCompanyListInfoVal] = useState([
    'AAFD',
    'KZ1C00008721',
    'основная',
    'акции',
    'стандарт',
    '15.12.21',
    '-'
  ])


  return (
    <CompanyListItemS>
        <Flex justify='space-between' align='center' margin='0 0 20px 0'>
            <CompanyListItemText>{name}</CompanyListItemText>
            <CompanyListItemIconWrap onClick={() => setDDClick(val => !val)} active={DDClick} justify='center' align='center'>
                    <CompanyListItemIcon active={DDClick} src={!DDClick?DDDown:DDUp}/>
            </CompanyListItemIconWrap>
        </Flex>

        <CompanyDDWrap active={DDClick}>
          <CompanyListItemDD >
            <CompanyListItemDDTop justify='space-between' active={DDClick}>
                {companyListInfo.map((el, index) => {
                  return <CompanyListItemDDBottomText key={index}  active={DDClick}>{el}</CompanyListItemDDBottomText>
                })}
            </CompanyListItemDDTop>
            <CompanyListItemDDBottom active={DDClick} justify='space-between'>
              {companyListInfoVal.map((el, index) => {
                    return <CompanyListItemDDBottomText key={index}  active={DDClick}>{el}</CompanyListItemDDBottomText>
                  })}
            </CompanyListItemDDBottom>
          </CompanyListItemDD>
        </CompanyDDWrap>
    </CompanyListItemS>
  )
}

export default CompanyListItem