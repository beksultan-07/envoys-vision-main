import styled from "styled-components"
import { Flex } from "../../uikit/uikit"


export const CalendarHeader = styled(Flex)`
    /* padding: 25px 0 40px 0; */
    padding: 25px 0;
    border-top: 1px solid #101010;
    border-bottom: 1px solid #101010;
`

export const CalendarHeaderText = styled.p`
    flex: 1;
    font-family: Exo 2;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #101010;
    text-transform: capitalize;
    margin: 0 10px;
    a{
        font-family: Exo 2;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        text-decoration-line: underline;
        color: #045599;
        text-transform: capitalize;
    }
`
export const CalendarIconWrap = styled.div`
    flex: .5;

`
export const CalendarIcon = styled.img`
    max-width: 18px;
`