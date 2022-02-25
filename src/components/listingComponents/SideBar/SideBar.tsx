import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { SideBarBtn, SideBarCloseWrap, SideBarFlex, SideBarIcon, SideBarLink, SideBarLinkActive, SideBarTitle, SideBarWrap } from './SideBarSC'
import rIcon from '../../../assets/right.svg'
import icon from '../../../assets/close.svg'


const SideBar:React.FC = () => {
    const [links, setLinks] = React.useState([
        'Список компаний',
        'ESG облигации',
        'Раскрытие информации компаниями',
        'Дипломанты номинаций'
    ])
    const [activeLink, setActivveLink] = React.useState('Список компаний')
    const [sideBarClickIcon, setSideBarClickIcon] = React.useState(false)

  return (
    <SideBarWrap>
        <SideBarFlex align='flex-start' direction='column' click={ sideBarClickIcon}>
            <SideBarTitle>
                <Flex justify='space-between'>
                    Листинг
                    <SideBarBtn onClick={() => setSideBarClickIcon(val => !val)}>
                        <img src={icon} alt="" />
                    </SideBarBtn>
                </Flex>
            </SideBarTitle>
    
            {links.map((el, i) => {
                if(el=== activeLink){
                    return <SideBarLinkActive key={i} onClick={(e) => {
                        setActivveLink(el)
                        setSideBarClickIcon(false)
                    } }>{el}</SideBarLinkActive>
                }

                return <SideBarLink key={i} onClick={(e) => {
                    setActivveLink(el)
                    setSideBarClickIcon(false)
                }}>{el}</SideBarLink>
            })}
        </SideBarFlex>
        
        <SideBarIcon src={rIcon} 
        onClick={() => setSideBarClickIcon(val => !val)}/>

        <SideBarCloseWrap click={sideBarClickIcon} 
        onClick={() => setSideBarClickIcon(val => !val)}></SideBarCloseWrap>

    </SideBarWrap>
  )
}

export default SideBar