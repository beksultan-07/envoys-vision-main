import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CompanyListItemDDBottom, CompanyListItemDDBottomText, CompanyListItemDDTitle, CompanyListItemDDTop } from '../CompanySC';

type Props = {
    values: any;
    DDClick: any;
}

const Fifth:React.FC<Props> = (props) => {  

  return (
    <>
        <CompanyListItemDDTitle active={props.DDClick}>Выделенные новости содержат информацию о рейтингах компании</CompanyListItemDDTitle>

        {props.values.map((el, index) => {
            return <CompanyListItemDDTitle key={index} active={props.DDClick}>
                {el[0]}
                <Link to='#' style={{marginLeft: '10px'}}>{el[1]}</Link>
            </CompanyListItemDDTitle> 
        })}
    </>
  )
}

export default Fifth