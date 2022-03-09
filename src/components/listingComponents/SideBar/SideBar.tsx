    import React from 'react'
import { Flex } from '../../../uikit/uikit'
import { SideBarBtn, SideBarCloseWrap, SideBarFlex, SideBarIcon, SideBarLink, SideBarLinkActive, SideBarTitle, SideBarWrap } from './SideBarSC'
import rIcon from '../../../assets/right.svg'
import icon from '../../../assets/close.svg'
import { useNavigate, useLocation } from 'react-router-dom'


type Props = {
    changeLP?: any
}

const SideBar:React.FC<Props> = (props) => {
    const [links, setLinks] = React.useState([
        'Листинг',
        'Облигации',
        'Раскрытие информации компаниями'
    ])
    const [activeLink, setActivveLink] = React.useState('Список компаний')
    const [sideBarClickIcon, setSideBarClickIcon] = React.useState(false)
    const navigate = useNavigate() 
    const location = useLocation()


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
    
            {links.map((el, index) => {
                if(el === location.state){
                    return <SideBarLinkActive key={index} onClick={(e) => {
                        setActivveLink(el)
                        setSideBarClickIcon(false)

                    } }>{el}</SideBarLinkActive>
                }

                return <SideBarLink key={index} onClick={(e) => {
                    setActivveLink(el)
                    setSideBarClickIcon(false)
                    if(Object.keys(props).length > 0){
                        props.changeLP(el)
                        navigate('/listing', {state: el})

                    }else{
                        navigate('/listing', {state: el})
                    }           
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