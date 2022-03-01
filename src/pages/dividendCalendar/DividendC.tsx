import React from 'react'
import CelenderTop from "../../components/celenderComponents/celenderTop/CelenderTop";
import CelenderListD from '../../components/celenderComponents/celenderList/CelenderListD'
import { Container } from '../../uikit/uikit'

const DividendC:React.FC = () => {
  const [info, setInfo] = React.useState({
    header: ['Symbol','Name','Ex-Dividend Date','Payment Date','Record Date','Dividend','Indicated Annual Dividend','Announcement Date'],
    value: [
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],
      ['NXPI', 'HighPeak Energy, Inc.', '02/01/2022', '02/01/2022', '02/01/2022', '0.025', '0.1', '01/11/2022'],

    ]
  })

  return (
    <Container>
      <CelenderTop/>
      <CelenderListD header={info.header} value={info.value}/>
    </Container>
  )
}

export default DividendC