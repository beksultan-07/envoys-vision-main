import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CompanyListItemDDBottom, CompanyListItemDDBottomText, CompanyListItemDDTitle, CompanyListItemDDTop } from '../CompanySC';

type Props = {
    header: any;
    values: any;
    DDClick: any;
}

const Third:React.FC<Props> = (props) => {  

  return (
    <>

        <CompanyListItemDDTop justify='space-between' active={props.DDClick}>
            {props.header.map((el:any, index:number) => {
                return <CompanyListItemDDBottomText key={index}  active={props.DDClick}>{el}</CompanyListItemDDBottomText>
            })}
        </CompanyListItemDDTop>
    
        {props.values.map((element:any, index:number) => {
            return <CompanyListItemDDBottom key={index} active={props.DDClick} justify='space-between'>
                {element.map((el:string, i:number) => {
                    return <CompanyListItemDDBottomText key={i} active={props.DDClick}>{el}</CompanyListItemDDBottomText>
                })}
            </CompanyListItemDDBottom>
            })            
        }
    </>
  )
}

export default Third