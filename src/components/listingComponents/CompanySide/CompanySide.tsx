import React, { useState } from 'react'
import { CompanyInfoName, CompanyInfoValue, CompanyInfoValueLink, CompanyList, CompanyListItemIcon, CompanyListItemIconWrap, CompanyListItemText, CompanyWrap } from './CompanySC'
import { SideBarTitle } from '../SideBar/SideBarSC'
import { Flex } from '../../../uikit/uikit'
import { Link } from 'react-router-dom'
import CompanyListItem from './CompanyListItem'

const CompanySide:React.FC = () => {
    const [companyInfo, setCompanyInfo] = React.useState([
        {
            name: 'Контакты',
            info: 'Телефоны: 7 (727) 321 00 22 Республика Казахстан, 040930, Алматинская обл., р-н Карасайский, сельский округ Жибек Жолы, село Жибек жолы, ул. Суйінбай, 1'
        },
        {
            name: 'Сайт',
            info: 'asiaagrofood.kz'
        },
        {
            name: 'Электронная почта',
            info: 'zerno@asiaagro.kz'
        },
        {
            name: 'Основная деятельность',
            info: 'производство и оптовая продажа муки, патоки и продуктов переработки пшеницы и кукурузы'
        },
        {
            name: 'Первый руководитель',
            info: 'Ашенов Саян Баймұратұлы Председатель Правления'
        },
    ])
    const [list, setList] = useState([
        'Ценные бумаги',
        'Акционеры',
        'Финансовые показатели',
        'Документы',
        'Новости',
    ])
  return (
    <CompanyWrap>
        <SideBarTitle>АО "АзияАгроФуд" (AAFD)</SideBarTitle>

        <Flex direction='column'>
            {companyInfo.map((el, i) => {
                return <Flex margin='30px 0 0 0'>
                        <CompanyInfoName>{el.name}:</CompanyInfoName>
                        {el.name==='Сайт'||el.name==='Электронная почта'
                        ?<CompanyInfoValueLink><Link to='#'>{el.info}</Link></CompanyInfoValueLink>
                        :<CompanyInfoValue>{el.info}:</CompanyInfoValue>
                    }
                    </Flex>
            })}

            <CompanyList>
                {list.map((el, i) => {
                    return <CompanyListItem key={i} name={el}/>
                })}            
            </CompanyList>

        </Flex>


    </CompanyWrap>
  )
}

export default CompanySide