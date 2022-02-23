import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { SideBarLink, SideBarLinkActive, SideBarTitle, SideBarWrap } from './SideBarSC'



const SideBar:React.FC = () => {
    const [links, setLinks] = React.useState([
        'Список компаний',
        'ESG облигации',
        'Раскрытие информации компаниями',
        'Дипломанты номинаций'
    ])
    const [activeLink, setActivveLink] = React.useState('Список компаний')


  return (
    <SideBarWrap>
        <Flex align='flex-start' direction='column'>
            <SideBarTitle>
                Листинг
            </SideBarTitle>
    
            {links.map((el, i) => {
                if(el=== activeLink){
                    return <SideBarLinkActive key={i} onClick={(e) => setActivveLink(el)}>{el}</SideBarLinkActive>
                }

                return <SideBarLink key={i} onClick={(e) => setActivveLink(el)}>{el}</SideBarLink>
            })}
        </Flex>
    </SideBarWrap>
  )
}

export default SideBar