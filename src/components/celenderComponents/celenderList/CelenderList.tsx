import React from 'react'
import { Link } from 'react-router-dom';
import moon from '../../../assets/moon.svg'
import sun from '../../../assets/sun.svg'
import { Flex } from '../../../uikit/uikit';
import { CelenderHeader, CelenderIconWrap, CelenderHeaderText, CelenderIcon } from '../CelenderSC';

type Props = {
    header: string[];
    value: {}[];
}

const CelenderList:React.FC<Props> = (props) => {   
  return (
    <>
        <CelenderHeader>
            {props.header.map((el,index) => {
                return <CelenderHeaderText key={index} style={{flex: index===0?'0.5':'1', margin: index===0?'0':'0 10px'}}>
                    {el}
                </CelenderHeaderText>
            })}
        </CelenderHeader> 
        <Flex direction='column' margin='0 0 100px 0'>
            {props.value.map((el:any,index) => {
                return <Flex key={index} margin='30px 0 0 0' align='center'>
                    <CelenderIconWrap><CelenderIcon src={el.icon=='moon'?moon:sun} alt="" /></CelenderIconWrap>
                    {el.value.map((el:any, index:number) => {
                        if(index === 0){
                            return <CelenderHeaderText key={index}>
                                <Link to='#'>{el}</Link>
                            </CelenderHeaderText> 
                        }
                        return <CelenderHeaderText key={index}>{el}</CelenderHeaderText>
                    })}
                </Flex>
            })}
        </Flex>
        
    </>
  )
}

export default CelenderList