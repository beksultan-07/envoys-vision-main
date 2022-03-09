import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {Flex} from '../../../uikit/uikit';
import globus from '../../../assets/Globus.svg'
import search from '../../../assets/search.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';


const ListCompany = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
// LC - сокращение от ListCompany

export const LCTitle = styled.h2`
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
type NavProps = {
  click: boolean
}

const NavItem = styled.li<NavProps>`
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
  transition: .3s;

  &:last-child {
    margin-right: 0;
  }

  border-bottom: ${props => props.click?'1px solid #F47F1F':'none'};
    &:before{
      position: ${props => props.click?'absolute':'static'};
      content: '';
      width: 15px;
      height: 15px;
      background: ${props => props.click?'#F47F1F':'none'};
      left: -23px;
      border-radius: 50% ;  
    }
`

const LCSearch = styled.input`
  background: #F1F1F1;
  border-radius: 8px 0 0 8px; 
  outline: none;
  border-style: none;
  padding: 16px 0 16px 20px;

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

const CompanySearchBtn = styled.button`
  background: #F1F1F1;
  border: none;
  border-radius: 0 8px 8px  0; 
  padding: 12px;
  img{
    width: 22px;
  }
`

type NavItemProps = {
  name: string;
  check: boolean;
}

const ListinC:React.FC = () => {

    // const[listItems, setListItems] = React.useState (require('./listing.json'))
    const[listItems, setListItems] = React.useState ([])


    

    const[listItems2, setListItems2] = React.useState ([...listItems])
    // const [NavitemsSort, setNavitemsSort] = React.useState({
    //   all: true,
    //   listing: false,
    //   notListing: false,
    //   default: false,
    // })

    const [inputVal, setInputVal] = React.useState<string>('')

    const navigate = useNavigate()
    const loc = useLocation()

    function linkHandler(e:React.MouseEvent) {
      navigate(loc.pathname+'/company', {state: e.target.outerText})

    }
        

    function onChangeHandler(e:React.ChangeEvent<HTMLInputElement>){
      let val = e.target.value
      let newListItems:any = [...listItems]

      if (val.length <= inputVal.length) {
        newListItems = [...listItems2]
      }

      if(val.length > 0){
        newListItems = newListItems.map((company:any) => {
          if(company !== undefined){
            
            for (let i = 0; i < company.outside.name.length; i++) { 
              if(company.outside.name.slice(i, i+val.length).toLowerCase().replace(/ +/g, ' ').trim() === val.toLowerCase().replace(/ +/g, ' ').trim()){
                return company
              }else if(company.outside.code.slice(i, i+val.length).toLowerCase().replace(/ +/g, ' ').trim() === val.toLowerCase().replace(/ +/g, ' ').trim()){
                return company
              }
            }
          }
        })
        setListItems(newListItems)
        setInputVal(val);
    }else{
      setListItems(listItems2)
    }
  }

  function linkCodeHandler(e:React.MouseEvent){
    navigate(loc.pathname+'/company', {state: e.target.nextElementSibling.outerText})
    
  }
    


    return (
        <ListCompany>
            <LCTitle>Список Компаний</LCTitle>
            <Flex justify={'space-between'}>
                {/* <LCNav>
                  <NavItem click={NavitemsSort.all} onClick={(e) => clickSortNav (e)}>Все</NavItem>
                  <NavItem click={NavitemsSort.listing} onClick={(e) => clickSortNav (e)}>Листинговые</NavItem>
                  <NavItem click={NavitemsSort.notListing} onClick={(e) => clickSortNav (e)}>Нелистинговые</NavItem>
                  <NavItem click={NavitemsSort.default} onClick={(e) => clickSortNav (e)}>Допустившие дефолт</NavItem>
                </LCNav> */}
                <LCCounter>Всего эмитентов - {listItems.length}</LCCounter>
            </Flex>

              <Flex align='center' margin='0 0 30px 0' style={{width: '100%'}}>
                <LCSearch placeholder={'Поиск (по коду или названию компании)'} style={{width: '100%'}} onChange={(e) => onChangeHandler(e)}/>
                <CompanySearchBtn>
                  <img src={search} alt="" />
                </CompanySearchBtn>
              </Flex>

            <List>
                <ListItems>
                  <ListItem style={{color: 'black', textDecoration: 'none'}}>Код</ListItem>
                  <ListItem style={{color: 'black', textDecoration: 'none'}}>Компания</ListItem>
                  {/* <ListItem style={{color: 'black', textDecoration: 'none'}}>Сайт</ListItem> */}
                  <ListItem style={{color: 'black', textDecoration: 'none', textAlign: 'end'}}>Капитлаизация, млрд сом</ListItem>
                </ListItems>

                    {listItems.map((el:any, idx:number) => {
                      if(el !== undefined){
                         return <ListItems key={idx}>
                            <ListItem onClick={(e) => linkCodeHandler(e)}>{el.outside.code}</ListItem>

                            <ListItem onClick={(e) => linkHandler(e)}>{el.outside.name} </ListItem> 
                            
                            <ListItem style={{cursor: 'auto', textAlign: 'end'}}>{el.outside.money}</ListItem>
                        </ListItems>
                      }})}
            </List>
        </ListCompany>
    );
};

export default ListinC;