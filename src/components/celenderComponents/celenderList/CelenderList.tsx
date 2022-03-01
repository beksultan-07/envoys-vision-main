import React from 'react'
import moon from '../../../assets/moon.svg'
import sun from '../../../assets/sun.svg'

type Props = {
    header: string[];
    value: {}[];
}

const CelenderList:React.FC<Props> = (props) => {

    React.useEffect(() => {
      console.log(props);
      
    }, [])
    
  return (
    <>
        <ul>
            {props.header.map((el,index) => {
                return <li key={index}>
                    {el}
                </li>
            })}
        </ul>
        <ul>
            {props.value.map((el:any,index) => {
                return <li key={index}>
                    <img src={el.icon=='moon'?moon:sun} alt="" />
                    {el.value.map((el:any, index:number) => {
                        return <p key={index}>{el}</p>
                    })}
                </li>
            })}
        </ul>
        
    </>
  )
}

export default CelenderList