import React, { useState } from 'react'
import CelenderList from '../../components/celenderComponents/celenderList/CelenderList'
import CelenderTop from '../../components/celenderComponents/celenderTop/CelenderTop'
import { Container } from '../../uikit/uikit'
import Investing from '../home/Investing'

const EarningC:React.FC = () => {
  const [info, setInfo] = useState({
    header: [
      'time',
      'Symbol',
      'Company Name',
      'Market Cap',
      'Fiscal Quarter Ending',
      'Consensus EPS* Forecast',
      '# Of Ests',
      "Last Year's Report Date",
      "Last Year's EPS*",
    ], 
    value: [
      {icon: 'sun', value:['NXPI','NXP Semiconductors N.V.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43']},
      {icon: 'moon  ', value:['SCCO','Southern Copper Corporation','$49,454,008,777', 'Dec/2021','$2.67','11','02/01/2021', '$2.43']},
      {icon: 'sun', value:['LHX','L3Harris Technologies, Inc.','$49,984,813,482', 'Dec/2021','$2.67','11','02/01/2021', '$2.43']},
      {icon: 'moon  ', value:['TT','Trane Technologies plc','$49,454,008,777', 'Dec/2021','$2.67','11','02/01/2021', '$2.43']},

    ]
  })

  return (
   <>
     <Container>
       <CelenderTop/>
       <CelenderList header={info.header} value={info.value}/>
     </Container>
     <Investing></Investing>
   </>
  )
}

export default EarningC