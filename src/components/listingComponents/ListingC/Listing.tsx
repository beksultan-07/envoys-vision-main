import React, {FC} from 'react';
import styled from "styled-components";
import {Flex} from '../../../uikit/uikit';
import globus from '../../../assets/Globus.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';


const ListCompany = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
// LC - сокращение от ListCompany

const LCTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #101010;
`

const LCNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 35px 0;
  padding: 0 0 0 25px;
`

const LCCounter = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #101010;
  margin: 30px 0 35px 10px;
`
const NavItem = styled.li`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #101010;
  list-style: none;
  margin-right: 50px;
  margin-top: 10px;
  position: relative;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover{
    border-bottom: 1px solid #F47F1F;
    &:before{
      position: absolute;
      content: '';
      width: 15px;
      height: 15px;
      background: #F47F1F;
      left: -23px;
      border-radius: 50% ;  
    }
  }
  
`

const LCSearch = styled.input`
  background: #F1F1F1;
  border-radius: 8px;
  outline: none;
  border-style: none;
  padding: 16px 0 16px 20px;
  margin-bottom: 30px;

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #969696;
  }
  @media(max-width: 396px){
    &::placeholder {
      font-size: 12px;
    }
  }
`

const List = styled.div`
  width: 100%;
`

const ListItems = styled.div`
    display: flex;
  justify-content: space-between;
  margin: 0 0 16px 0;
  padding: 21px 0 17px;
  border-bottom: 1px solid #DADADA ;
  &:first-child{
    border-bottom: 1px solid #000 ;
    border-top: 1px solid #000;
    display: flex;
    align-items: center;  
  }
`

const ListItem = styled.div`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: #045599;
  cursor: pointer;
  margin: 0 5px;
  a{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    text-decoration-line: underline;
    color: #045599;
  }
  &:nth-child(1){
    margin: 0;
  }
  &:nth-child(4){
    width: 100px;
    text-align: right;
  }
  
  &:last-child{
    color: black;
    text-decoration: none;
  }
`

const ListinC: FC = () => {

    const listItems = [
        {companyCode: 'Код', companyName: 'Компания', webSite: 'Сайт', capitalize: 'Капитлаизация, млрд сом'},
        {companyCode: 'AAFD', companyName: 'ОАО Оптима Банк', webSite: globus, capitalize: '4 410,00    '},
        {companyCode: 'AAFD', companyName: 'ОАО Учкун', webSite: globus, capitalize: '72,42'},
        {companyCode: 'AAFD', companyName: 'ОАО Северэлектро', webSite: globus, capitalize: '216,21'},
        {companyCode: 'AAFD', companyName: 'ЗАО «UBS Transit»', webSite: globus, capitalize: '17%'},
        {companyCode: 'AAFD', companyName: 'ОАО "Айыл Банк"', webSite: globus, capitalize: '3 524,62'},
    ]

    const count = listItems.length
    const [inputVal, setInputVal] = React.useState()

    const navigate = useNavigate()
    const loc = useLocation()

    function linkHandler(e:React.MouseEvent) {
      navigate(loc.pathname+'/company', {state: {CompanyName: e.target.outerText}})
    }

    function onChangeHandler(e:React.ChangeEvent<HTMLInputElement>){
      console.log(e.target.value);
      setInputVal(e.target.value)
        
    }

    return (
        <ListCompany>
            <LCTitle>Список Компаний</LCTitle>
            <Flex justify={'space-between'}>
                <LCNav>
                    <NavItem>Все</NavItem>
                    <NavItem>Листинговые</NavItem>
                    <NavItem>Нелистинговые</NavItem>
                    <NavItem>Допустившие дефолт</NavItem>
                </LCNav>
                <LCCounter>Всего эмитентов - {count}</LCCounter>
            </Flex>
            <LCSearch placeholder={'Поиск (по коду или названию компании)'} onChange={(e) => onChangeHandler(e)}/>
            <List>
                <>
                    {listItems.map((el, idx) => (
                        <ListItems key={idx}>
                            { idx === 0 ? <ListItem style={{color: 'black', textDecoration: 'none'}}>{el.companyCode}</ListItem> : <ListItem>{el.companyCode}</ListItem> }

                            { idx === 0 
                            ?<ListItem style={{color: 'black', textDecoration: 'none'}}>{el.companyName}</ListItem> 
                            :
                              <ListItem onClick={(e) => linkHandler(e)}>{el.companyName}
                              </ListItem>
                           }

                            {el.webSite === 'Сайт' ? <ListItem style={{color: 'black', textDecoration: 'none'}}>Сайт</ListItem> : <ListItem><img src={el.webSite} alt=""/></ListItem>
                            }
                            <ListItem style={{cursor: 'auto'}}>{el.capitalize}</ListItem>
                        </ListItems>

                    ))}
                </>
            </List>
        </ListCompany>
    );
};

export default ListinC;