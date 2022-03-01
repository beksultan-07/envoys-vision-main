import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CompanyListItemDDBottom, CompanyListItemDDBottomText, CompanyListItemDDTitle, CompanyListItemDDTop } from '../CompanySC';

type Props = {
    header: any;
    values: any;
    values2: any;
    DDClick: any;
}

const Second:React.FC<Props> = (props) => {  

  return (
    <>

        <CompanyListItemDDTitle active={props.DDClick}>по состоянию на 1 января 2022 г. (<Link to='#'>к предыдущей выписке</Link>)</CompanyListItemDDTitle>
        <CompanyListItemDDTop justify='space-between' active={props.DDClick}>
            {props.header.map((el, index) => {
                return <CompanyListItemDDBottomText key={index}  active={props.DDClick}>{el}</CompanyListItemDDBottomText>
            })}
        </CompanyListItemDDTop>
    
        <CompanyListItemDDBottom active={props.DDClick} justify='space-between'>
            {props.values[0].map((el, index) => {
                return <CompanyListItemDDBottomText key={index}  active={props.DDClick}>{el}</CompanyListItemDDBottomText>
                })}
        </CompanyListItemDDBottom>
        <CompanyListItemDDBottom active={props.DDClick} justify='space-between'>
            {props.values[1].map((el, index) => {
                return <CompanyListItemDDBottomText key={index}  active={props.DDClick}>{el}</CompanyListItemDDBottomText>
                })}
        </CompanyListItemDDBottom>

        <CompanyListItemDDTop active={props.DDClick}></CompanyListItemDDTop>
        {props.values2.map((element, index) => {
            return <CompanyListItemDDBottom key={index} active={props.DDClick} justify='space-between'>
                {element.map((el, i) => {
                    return <CompanyListItemDDBottomText key={i} style={{textAlign: i===1?'end':'start'}}  active={props.DDClick}>{el}</CompanyListItemDDBottomText>
                })}
            </CompanyListItemDDBottom>
            })            
        }
    </>
  )
}

export default Second