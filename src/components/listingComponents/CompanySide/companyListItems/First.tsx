import React, { useEffect } from 'react'
import { CompanyListItemDDBottom, CompanyListItemDDBottomText, CompanyListItemDDTop } from '../CompanySC';

type Props = {
    header: any;
    values: any;
    DDClick: any;
}

const First:React.FC<Props> = (props) => {  

  return (
    <>
        <CompanyListItemDDTop justify='space-between' active={props.DDClick}>
            {props.header.map((el, index) => {
                return <CompanyListItemDDBottomText key={index}  active={props.DDClick}>{el}</CompanyListItemDDBottomText>
            })}
        </CompanyListItemDDTop>
    
        <CompanyListItemDDBottom active={props.DDClick} justify='space-between'>
            {props.values.map((el, index) => {
                return <CompanyListItemDDBottomText key={index}  active={props.DDClick}>{el}</CompanyListItemDDBottomText>
                })}
        </CompanyListItemDDBottom>
    </>
  )
}

export default First