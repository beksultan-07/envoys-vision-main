import React, { useState } from 'react'
import { CompanyInfoName, CompanyInfoValue, CompanyInfoValueLink, CompanyList, CompanyListItemIcon, CompanyListItemIconWrap, CompanyListItemText, CompanyTitle, CompanyWrap } from './CompanySC'
import { Flex } from '../../../uikit/uikit'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import CompanyListItem from './CompanyListItem'

const CompanySide:React.FC = () => {
    const [companyInfo, setCompanyInfo] = React.useState(require('../ListingC/listing.json'))
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
            setCompanyName(location.state)
        }
    }, [])
    

  return (
    <CompanyWrap>
        <CompanyTitle>{companyName}</CompanyTitle>

        <Flex direction='column'>
            {companyInfo.map((el:any, index:number) => {
                if(el.inside.name === companyName){
                    return <Flex direction='column' key={index}>
                        <Flex margin='30px 0 0 0'>
                            <CompanyInfoName>Контакты:</CompanyInfoName>
                            <CompanyInfoName>{el.inside.address}</CompanyInfoName>
                        </Flex>
                        <Flex margin='30px 0 0 0'>
                            <CompanyInfoName>Основная деятельность:</CompanyInfoName>
                            <CompanyInfoName>{el.inside.kindOfActivity}</CompanyInfoName>
                        </Flex>
                        <Flex margin='30px 0 0 0'>
                            <CompanyInfoName>Руководитель:</CompanyInfoName>
                            <CompanyInfoName>{el.inside.boss}</CompanyInfoName>
                        </Flex>
                    </Flex>
                }
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