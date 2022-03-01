import React, { useState } from 'react'
import { CompanyInfoName, CompanyInfoValue, CompanyInfoValueLink, CompanyList, CompanyListItemIcon, CompanyListItemIconWrap, CompanyListItemText, CompanyTitle, CompanyWrap } from './CompanySC'
import { Flex } from '../../../uikit/uikit'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
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
    const [companyName, setCompanyName] = React.useState('')

    const location = useLocation()
    const navigate = useNavigate() 

    React.useEffect(() => {
        if(location.state === null){
            navigate('/listing')
        }else{
            setCompanyName(location.state.CompanyName)
        }
    }, [])
    

  return (
    <CompanyWrap>
        <CompanyTitle>{companyName}</CompanyTitle>

        <Flex direction='column'>
            {companyInfo.map((el, index) => {
                return <Flex margin='30px 0 0 0'  key={index}>
                        <CompanyInfoName>{el.name}:</CompanyInfoName>
                        {el.name==='Сайт'||el.name==='Электронная почта'
                        ?<CompanyInfoValueLink><Link to='#'>{el.info}</Link></CompanyInfoValueLink>
                        :<CompanyInfoValue>{el.info}:</CompanyInfoValue>
                    }
                    </Flex>
            })}

            <CompanyList>
                {list.map((el, index) => {
                    return <CompanyListItem key={index} name={el} id={index}/>
                })}            
            </CompanyList>

        </Flex>


    </CompanyWrap>
  )
}

export default CompanySide