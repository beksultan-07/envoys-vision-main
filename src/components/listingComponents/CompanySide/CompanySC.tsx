import styled from "styled-components";
import { Flex } from "../../../uikit/uikit";

export const CompanyWrap = styled.div`

`

export const CompanyInfoName = styled.p`
    flex: 1;
    font-family: Exo 2;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #959595;
`

export const CompanyInfoValue = styled(CompanyInfoName)`
    color: #101010;
    flex: 2;
    margin-left: 10px;
`

export const CompanyInfoValueLink = styled(CompanyInfoValue)`
    a{
        text-decoration: none;
        font-family: Exo 2;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #045599;
    }
`

export const CompanyList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 50px;
`

export const CompanyListItemText = styled.h5`
    font-family: Exo 2;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #101010;
`

type Props = {
    active: boolean;
}

export const CompanyListItemIconWrap = styled(Flex)<Props>`
    transition: .3s linear;
    width: 40px;
    height: 40px;
    background: ${props => !props.active?'#fff':'#045599'};
    border-radius: 50%;
    border: ${props => !props.active?'1px solid #045599':'none'}; 
    cursor: pointer;
`

export const CompanyDDWrap = styled.div<Props>`
    /* visibility:  */
`

export const CompanyListItemIcon = styled.img<Props>`
    margin-top: ${props => !props.active?'0':'-2px'};
    width: 24px;
`

export const CompanyListItemS = styled.li`
    width: 100%;
    padding: 25px 0;
    border-bottom: 1px solid #DADADA;
    :last-child{
        border-bottom: none;
    }
    `

export const CompanyListItemDD = styled.div`
    width: 100%;
`

export const CompanyListItemDDTop = styled(Flex)<Props>`
    width: 100%;
    background: #C7D7EB;
    transition: .3s linear;
    padding: ${props => !props.active?'0 20px': '15px 20px'};
    visibility: ${props => !props.active?'hidden':'visible'};
`

export const CompanyListItemDDBottom = styled(CompanyListItemDDTop)<Props>`
    background: #ECF1F8;
    padding: ${props => !props.active?'0 20px': '15px 20px'};
`

export const CompanyListItemDDBottomText = styled.p<Props>`
    flex: 1;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #101010;
    transition: .2s linear;
    opacity: ${props => !props.active?'0':'1'};
    visibility: ${props => !props.active?'hidden':'visible'};
    text-align: center;
    :first-child{
        text-align: start;
    }

`