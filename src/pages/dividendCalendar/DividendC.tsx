import React from 'react'
import CelenderTop from "../../components/celenderComponents/celenderTop/CelenderTop";
import CelenderListD from '../../components/celenderComponents/celenderList/CelenderListD'
import { Container } from '../../uikit/uikit'
import Investing from '../home/Investing';

const DividendC:React.FC = () => {

  const [infoHeader, setInfoHeader] = React.useState(['Symbol','Name','Ex-Dividend Date','Payment Date','Record Date','Dividend','Indicated Annual Dividend','Announcement Date'])
  const [infoValue, setInfoValue] = React.useState([
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, dsa.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, bekas.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, lsd.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
    ])
    const [infoCopy, setInfoCopy] = React.useState([...infoValue])
    const [inputValue, setInputValue] = React.useState('')

    function inputValueChange(e:React.ChangeEvent){
      let newInfoVal:any = [...infoValue]
      let val = e.target.value
      
      if (val.length <= inputValue.length) {
        newInfoVal = [...infoCopy]
      }
  
      if(val.length > 0){
        newInfoVal = newInfoVal.map((el, index) => {
          if(el !== undefined){
            for (let i = 0; i < el[1].length; i++) { 
              if(el[1].slice(i, i+val.length).toLowerCase().replace(/ +/g, ' ').trim() === val.toLowerCase().replace(/ +/g, ' ').trim()){
                return el
              }else if(el[0].slice(i, i+val.length).toLowerCase().replace(/ +/g, ' ').trim() === val.toLowerCase().replace(/ +/g, ' ').trim()){
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
        <CelenderTop setInputValue={inputValueChange}/>
        <CelenderListD header={infoHeader} value={infoValue}/>
      </Container>
       <Investing></Investing>
    </>

  )
}

export default DividendC