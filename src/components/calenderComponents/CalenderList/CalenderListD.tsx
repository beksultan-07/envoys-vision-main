import React from 'react'
import { Link } from 'react-router-dom';
import moon from '../../../assets/moon.svg'
import sun from '../../../assets/sun.svg'
import { Flex } from '../../../uikit/uikit';
import { CalendarHeader, CalendarHeaderText} from '../CalenderSC';

type Props = {
    header: string[];
    value: any;
}

const CalendarListD:React.FC<Props> = (props) => { 
  return (
    <>
        <CalendarHeader>
            {props.header.map((el,index) => {
                return <CalendarHeaderText key={index} style={{flex: index===0?'0.5':'1', margin: index===0?'0':'0 10px'}}>
                    {el}
                </CalendarHeaderText>
            })}
        </CalendarHeader> 
        <Flex direction='column' margin='0 0 100px 0'>
            {props.value.map((arr:any, i) => {

                if(arr !== undefined){
                    return <Flex margin='30px 0 0 0' key={i}>
                        {arr.map((el:string, index:number) => {
                            if(index === 0 || index === 1){
                                return <CalendarHeaderText style={{flex: index==0?'.5':'1',margin: index==0?'0':'0 10px'}} key={index}>
                                                <Link to='#'>{el}</Link>
                                            </CalendarHeaderText> 
                            }
                            return <CalendarHeaderText key={index}>{el}</CalendarHeaderText>
                            })}
                        </Flex>         
                }
                
            })}
        </Flex>
        
    </>
  )
}

export default CalendarListD