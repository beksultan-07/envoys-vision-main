import React, { useState } from 'react'
import CalendarList from '../../components/calenderComponents/CalenderList/CalenderList'
import CalendarTop from '../../components/calenderComponents/CalenderTop/CalenderTop'
import { Container } from '../../uikit/uikit'
import Investing from '../home/Investing'

const EarningC:React.FC = () => {

  const [infoHeader, setInfoHaader] = useState([
    'tim e',
    'Symbol',
    'Company Name',
    'Market Cap', 
    'Fiscal Quarter Ending',
    'Consensus EPS* Forecast',
    '# Of Ests',
    "Last Year's Report Date",
    "Last Year's EPS*",
  ])

  const [infoValue, setInfoValue] = useState ([
    // {icon: 'sun', value:['NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43']},
    // {icon: 'moon  ', value:['SCCO','Southern Copper Corporation','$49,454,008,777', 'Dec/2021','$2.67','11','02/01/2021', '$2.43']},
    // {icon: 'sun', value:['LHX','L3Harris Technologies, Inc.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43']},
    // {icon: 'moon  ', value:['TT','Trane Technologies plc','$49,454,008,777', 'Dec/2021','$2.67','11','02/01/2021', '$2.43']},
    ])


  const [infoCopy, setInfoCopy] = useState([...infoValue])
  const [inputValue, setInputValue] = useState('')
  
  function inputValueChange(e:React.ChangeEvent){
    let newInfoVal:any = [...infoValue]
    let val = e.target.value
    
    if (val.length <= inputValue.length) {
      newInfoVal = [...infoCopy]
    }

    if(val.length > 0){
      newInfoVal = newInfoVal.map((el:any, index:number) => {
        if(el !== undefined){
          for (let i = 0; i < el.value[1].length; i++) { 
            if(el.value[1].slice(i, i+val.length).toLowerCase().replace(/ +/g, ' ').trim() === val.toLowerCase().replace(/ +/g, ' ').trim()){
              return el
            } else if(el.value[0].slice(i, i+val.length).toLowerCase().replace(/ +/g, ' ').trim() === val.toLowerCase().replace(/ +/g, ' ').trim()){
              return el
            }
          }
        }
      })
      setInputValue(val);
      setInfoValue(newInfoVal)
    }else{
      setInfoValue(infoCopy)
    } 
  }

  return (
   <>
     <Container>
        <CalendarTop setInputValue={inputValueChange}/>
        <CalendarList header={infoHeader} value={infoValue}/>
     </Container>
     <Investing></Investing>
   </>
  )
}

export default EarningC