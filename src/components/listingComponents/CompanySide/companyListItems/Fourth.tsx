import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CompanyListItemDDBottom, CompanyListItemDDBottomText, CompanyListItemDDTitle, CompanyListItemDDTop, CompanyListItemIcon } from '../CompanySC';

import img from '../../../../assets/document.svg'
import { Flex } from '../../../../uikit/uikit';

type Props = {
    header: any;
    values: any;
    DDClick: any;
}

const Fourth:React.FC<Props> = (props) => {  

  return (
    <>

        <CompanyListItemDDTop justify='space-between' active={props.DDClick}>
            {props.header.map((el, index) => {
                return <CompanyListItemDDBottomText key={index} style={{textAlign: index===1?'end':'start'}}  active={props.DDClick}>{el}</CompanyListItemDDBottomText>
            })}
        </CompanyListItemDDTop>
    
        {props.values.map((element, index) => {
            return <CompanyListItemDDBottom key={index} active={props.DDClick} justify='space-between'>
                {element.map((el, i) => {
                    if(i===0){
                        return <Flex key={i} flex={1}>
                                <CompanyListItemIcon src={img} style={{marginRight: '20px'}}/>
                                <CompanyListItemDDBottomText style={{textAlign: i===1?'end':'start'}} active={props.DDClick}>{el}</CompanyListItemDDBottomText>
                        </Flex>
                    }
                    return <CompanyListItemDDBottomText key={i} style={{textAlign: i===1?'end':'start'}} active={props.DDClick}>{el}</CompanyListItemDDBottomText>
                })}
            </CompanyListItemDDBottom>
            })            
        }
    </>
  )
}

export default Fourth