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
        console.log(location);
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
                if(el.inside.name === companyName){
                    return <>
                        <Flex margin='30px 0 0 0'  key={index}>
                            <CompanyInfoName>Контакты:</CompanyInfoName>
                            <CompanyInfoName>{el.inside.address}</CompanyInfoName>
                        </Flex>
                        <Flex margin='30px 0 0 0'  key={index}>
                            <CompanyInfoName>Основная деятельность:</CompanyInfoName>
                            <CompanyInfoName>{el.inside.kindOfActivity}</CompanyInfoName>
                        </Flex>
                        <Flex margin='30px 0 0 0'  key={index}>
                            <CompanyInfoName>Руководитель:</CompanyInfoName>
                            <CompanyInfoName>{el.inside.boss}</CompanyInfoName>
                        </Flex>
                    </>
                }
            })}
{/*             
                            return <Flex margin='30px 0 0 0'  key={index}>
                                    <CompanyInfoName>{el.name}:</CompanyInfoName>
                                    {el.name==='Сайт'||el.name==='Электронная почта'
                                    ?<CompanyInfoValueLink><Link to='#'>{el.info}</Link></CompanyInfoValueLink>
                                    :<CompanyInfoValue>{el.info}:</CompanyInfoValue>
                                }
                                </Flex> */}

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